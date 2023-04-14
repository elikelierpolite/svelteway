#!/usr/bin/env node
'use strict';
import { Buffer } from 'node:buffer';
import fs from 'node:fs';
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
		const currentDirectory = cwd();
		if (fs.existsSync(`${currentDirectory}/svelteway-safe-layout.svelte`)) {
			const content = await fs.promises.readFile(
				`${currentDirectory}/svelteway-safe-layout.svelte`
			);
			const buf = Buffer.from(`${content}`, 'utf8');
			fs.writeFileSync(`${currentDirectory}/src/routes/+layout.svelte`, buf);
		}
		const apiFolder = `${currentDirectory}/src/routes/api/svelteway`;
		const folderName = `${currentDirectory}/src/routes/api/svelteway`;
		const themeFile = `${currentDirectory}/static/theme.txt`;
		const buf = Buffer.from(
			`import type { Actions } from './$types';
			import { redirect } from '@sveltejs/kit';
			import { Buffer } from 'node:buffer';
			import fs from 'node:fs';;
			import { cwd } from 'process';
			
			export const actions = {
				save: async ({ request }) => {
					const data = await request.formData();
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
				},
				theme: async ({ request }) => {
					const currentDirectory = cwd().replace(/\\\\/g, '/');
					const themeFile = \`\${currentDirectory}/static/theme.txt\`;
					const data = await request.formData();
					const theme = data.get('theme');
					const buf = Buffer.from(theme, 'utf8');
					try {
						if (theme) {
							fs.writeFileSync(themeFile, buf);
							throw redirect(307, data.get('redirectTo'));
						}
					} catch (err) {
						console.error(err);
					}
				}
			} satisfies Actions;
			`,
			'utf8'
		);
		const bufJs = Buffer.from(
			`import { redirect } from '@sveltejs/kit';
			import { Buffer } from 'node:buffer';
			import fs from 'node:fs';;
			import { cwd } from 'process';
			
			export const actions = {
				save: async ({ request }) => {
					const data = await request.formData();
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
				},
				theme: async ({ request }) => {
					const currentDirectory = cwd().replace(/\\\\/g, '/');
					const themeFile = \`\${currentDirectory}/static/theme.txt\`;
					const data = await request.formData();
					const theme = data.get('theme');
					const buf = Buffer.from(theme, 'utf8');
					try {
						if (theme) {
							fs.writeFileSync(themeFile, buf);
							throw redirect(307, data.get('redirectTo'));
						}
					} catch (err) {
						console.error(err);
					}
				}
			};
			`,
			'utf8'
		);
		try {
			if (!fs.existsSync(themeFile)) {
				const themeBuf = Buffer.from(`light`, 'utf8');
				fs.writeFileSync(themeFile, themeBuf);
			}
			if (!fs.existsSync(apiFolder)) {
				fs.mkdirSync(apiFolder);
			}
			if (!fs.existsSync(folderName)) {
				fs.mkdirSync(folderName);
				if (fs.existsSync(`${currentDirectory}/tsconfig.json`)) {
					fs.writeFileSync(`${folderName}/+page.server.ts`, buf);
				} else {
					fs.writeFileSync(`${folderName}/+page.server.js`, bufJs);
				}
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
		const currentDirectory = cwd();
		const layoutFile = `${currentDirectory}/src/routes/+layout.svelte`;
		const content = await fs.promises.readFile(layoutFile);
		const buf = Buffer.from(`${content}`, 'utf8');
		const themeFile = `${currentDirectory}/static/theme.txt`;
		const themeContent = await fs.promises.readFile(themeFile);
		const themeContent2 = JSON.stringify(themeContent.toString('utf8'));
		const theme = JSON.parse(themeContent2);
		fs.writeFileSync(`${currentDirectory}/svelteway-safe-layout.svelte`, buf);
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
				// eslint-disable-next-line no-useless-escape
				/import { Layout } from \"svelteway\";/g,
				/<div data-theme={theme}>\r\n\t\t<slot \/>\r\n\t<\/div>/g
			],
			to: ['', '', '', `<div data-theme="${theme}}><slot /></div>`]
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
