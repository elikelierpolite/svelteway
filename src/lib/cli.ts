#!/usr/bin/env node
'use strict';
import { Buffer } from 'node:buffer';
import * as fs from 'fs';
import { cwd } from 'process';
import replaceInFile from 'replace-in-file';

const printUsageDetails = () => {
	const actions = [
		{
			name: 'dev'
		},
		{
			name: 'build'
		}
	];
	let usage = '\nUsage: \n\n';
	actions.forEach((action) => {
		usage += '  svelteway ' + action.name;
		usage += '\n\n';
	});
	console.log(usage);
	process.exit(1);
};
const svelteWayDev = async () => {
	try {
		const currentDirectory = cwd().replace(/\\/g, '/');
		if (fs.existsSync(`${currentDirectory}/Svelteway-safe-layout.svelte`)) {
			const content = await fs.promises.readFile(
				`${currentDirectory}/Svelteway-safe-layout.svelte`
			);
			const buf = Buffer.from(`${content}`, 'utf8');
			fs.writeFileSync(`${currentDirectory}/src/routes/+layout.svelte`, buf);
		}
		const folderName = `${currentDirectory}/src/routes/api/svelteway`;
		const buf = Buffer.from(
			`import type { Actions } from './$types';
		import { redirect } from '@sveltejs/kit';
		import { Buffer } from 'node:buffer';
		import * as fs from 'fs';
		
		export const actions = {
			default: async ({ request }) => {
			const data = await request.formData()
				const path = data.get('path');
				const swc = data.get('swc');
				const buf = Buffer.from(swc, 'utf8');
				try {
					if (swc) {
						fs.writeFileSync(path, buf);
					}
					throw redirect(307, data.get('redirectTo'));
				} catch (err) {
					console.error(err);
				}
			}
		} satisfies Actions;`,
			'utf8'
		);
		try {
			if (!fs.existsSync(folderName)) {
				fs.mkdirSync(folderName);
				fs.writeFileSync(`${folderName}/+page.server.ts`, buf);
			}
		} catch (err) {
			console.error(err);
		}
	} catch (err) {
		console.error(err);
	}
	process.exit(0);
};
const svelteWayBuild = async () => {
	try {
		const currentDirectory = cwd().replace(/\\/g, '/');
		const layoutFile = `${currentDirectory}/src/routes/+layout.svelte`;
		const content = await fs.promises.readFile(layoutFile);
		const buf = Buffer.from(`${content}`, 'utf8');
		fs.writeFileSync(`${currentDirectory}/Svelteway-safe-layout.svelte`, buf);
		if (fs.existsSync(`${currentDirectory}/src/routes/api/svelteway`)) {
			fs.rm(
				`${currentDirectory}/src/routes/api/svelteway`,
				{ recursive: true, force: true },
				(err) => {
					return;
				}
			);
		}
		const options = {
			files: layoutFile,
			from: [
				/<Layout \{data\}>/g,
				/<\/Layout>/g,
				/import Layout from '\$lib\/components\/Layout\.svelte';/g
			],
			to: ''
		};
		const results = await replaceInFile(options);
	} catch (err) {
		return;
	}
	process.exit(0);
};
const action = process.argv[2];
switch (action) {
	case 'dev':
		svelteWayDev();
		break;
	case 'build':
		svelteWayBuild();
		break;
	default:
		printUsageDetails();
		break;
}
