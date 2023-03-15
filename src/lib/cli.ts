'use strict';
import { mkdir } from 'node:fs/promises';
import { Buffer } from 'node:buffer';
import * as fs from 'fs';

const printUsageDetails = () => {
	const actions = [
		{
			name: 'init'
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

const svelteWayInit = async () => {
	console.log(
		'****************************************svelteWayInit********************************************'
	);
	const currentDirectory = process.cwd().replace(/\\/g, '/');
	const createDirectory = `${currentDirectory}/src/routes/svelteway`;
	try {
		await mkdir(createDirectory, { recursive: true }).then(() => {
			const buf = Buffer.from(`<script></script><h1>Hello SvelteWay!</h1><style></style>`, 'utf8');
			const pathBuf = Buffer.from(`export const svelteWayCwd = ${JSON.stringify(currentDirectory)}`, 'utf8');
			try {
				fs.writeFileSync(`${currentDirectory}/src/routes/svelteway/+page.svelte`, buf);
				fs.writeFileSync(`${currentDirectory}/sveltewaycwd.js`, pathBuf);
				// file written successfully
			} catch (err) {
				console.error(err);
			}
		});
	} catch (err) {
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		// @ts-ignore
		console.error(err.message);
	}
	process.exit(0);
};

const action = process.argv[2];
switch (action) {
	case 'init':
		svelteWayInit();
		break;
	default:
		printUsageDetails();
		break;
}
