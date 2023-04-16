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
		const apiFolder = `${currentDirectory}/src/routes/api`;
		const folderName = `${currentDirectory}/src/routes/api/svelteway`;
		const themeFile = `${currentDirectory}/static/theme.txt`;
		const themeContent = await fs.promises.readFile(themeFile);
		const themeContent2 = JSON.stringify(themeContent.toString('utf8'));
		const theme = JSON.parse(themeContent2);
		const layoutFile = `${currentDirectory}/src/routes/+layout.svelte`;
		const layoutServerFile = fs.existsSync(`${currentDirectory}/tsconfig.json`)
			? `${currentDirectory}/src/routes/+layout.server.ts`
			: `${currentDirectory}/src/routes/+layout.server.js`;
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
			const themeRegex = new RegExp(`<div data-theme="${theme}"><slot /></div>`, 'g');
			const options = {
				files: [layoutFile, layoutServerFile],
				from: [
					/<!-- svelteway-safe-layout-ot do not erase this line -->/g,
					/<!-- svelteway-safe-layout-ct do not erase this line -->/g,
					// eslint-disable-next-line no-useless-escape
					/\/\/ svelteway-safe-layout-import do not erase this line/g,
					/\/\/ svelteway-safe-theme-constant do not erase this line/g,
					// eslint-disable-next-line no-useless-escape
					themeRegex,
					// eslint-disable-next-line no-useless-escape
					/\/\/svelteway-safe-cwd-import do not erase this line/g,
					// eslint-disable-next-line no-useless-escape
					/\/\/svelteway-safe-fs-import do not erase this line/g,
					/\/\/svelteway-safe-cwd-declaration do not erase this line/g,
					// eslint-disable-next-line no-useless-escape
					///svelteway-safe-fileToRead-declaration do not erase this line/g,
					/\/\/svelteway-safe-themeFile-declaration do not erase this line/g,
					/\/\/svelteway-safe-themeContent-declaration do not erase this line/g,
					/\/\/svelteway-safe-content-declaration do not erase this line/g,
					// eslint-disable-next-line no-useless-escape
					/\/\/svelteway-safe-source-data do not erase this line/g,
					/\/\/svelteway-safe-file-data do not erase this line/g,
					// eslint-disable-next-line no-useless-escape
					/\/\/svelteway-safe-theme-data do not erase this line/g
				],
				to: [
					'<Layout {data}>',
					'</Layout>',
					'import { Layout } from "svelteway";',
					`const theme = JSON.parse(data.data.theme);`,
					`<div data-theme={theme}><slot />
			t</div>`,
					"import { cwd } from 'process';",
					"import fs from 'node:fs';",
					'const currentDirectory = cwd();',
					// eslint-disable-next-line no-useless-escape
					"const fileToRead =\r\n\t\troute.id == \'\/\'\r\n\t\t\t? `${currentDirectory}\/src\/routes\/+page.svelte`\r\n\t\t\t: `${currentDirectory}\/src\/routes\/${route.id}\/+page.svelte`;",
					'const themeFile = `${currentDirectory}/static/theme.txt`;',
					'const themeContent = await fs.promises.readFile(themeFile);',
					'const content = await fs.promises.readFile(fileToRead);',
					'',
					"source: content.toString('utf8'),",
					'file: fileToRead,',
					"theme: JSON.stringify(themeContent.toString('utf8'))"
				]
			};
			// eslint-disable-next-line @typescript-eslint/ban-ts-comment
			//@ts-ignore
			await replaceInFile(options);
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
		const layoutServerFile = fs.existsSync(`${currentDirectory}/tsconfig.json`)
			? `${currentDirectory}/src/routes/+layout.server.ts`
			: `${currentDirectory}/src/routes/+layout.server.js`;
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
				() => {
					return;
				}
			);
		}
		const options = {
			files: [layoutFile, layoutServerFile],
			from: [
				/<Layout \{data\}>/g,
				/<\/Layout>/g,
				// eslint-disable-next-line no-useless-escape
				/import { Layout } from \"svelteway\";/g,
				/const theme = JSON.parse(data.data.theme);/g,
				/<div data-theme={theme}>\r\n\t\t<slot \/>\r\n\t<\/div>/g,
				// eslint-disable-next-line no-useless-escape
				/import { cwd } from \'process\';/g,
				// eslint-disable-next-line no-useless-escape
				/import fs from \'node:fs\';/g,
				/const currentDirectory = cwd();/g,
				// eslint-disable-next-line no-useless-escape
				/const fileToRead =\r\n\t\troute.id == \'\/\'\r\n\t\t\t? `${currentDirectory}\/src\/routes\/+page.svelte`\r\n\t\t\t: `${currentDirectory}\/src\/routes\/${route.id}\/+page.svelte`;/g,
				/const themeFile = `${currentDirectory}\/static\/theme.txt`;/g,
				/const themeContent = await fs.promises.readFile(themeFile);/g,
				/const content = await fs.promises.readFile(fileToRead);/g,
				// eslint-disable-next-line no-useless-escape
				/source: content.toString(\'utf8\'),/g,
				/file: fileToRead,/g,
				// eslint-disable-next-line no-useless-escape
				/theme: JSON.stringify(themeContent.toString(\'utf8\'))/g
			],
			to: [
				'<!-- svelteway-safe-layout-ot do not erase this line -->',
				'<!-- svelteway-safe-layout-ct do not erase this line -->',
				'// svelteway-safe-layout-import do not erase this line',
				`// svelteway-safe-theme-constant do not erase this line`,
				`<div data-theme="${theme}"><slot /></div>`,
				'//svelteway-safe-cwd-import do not erase this line',
				'//svelteway-safe-fs-import do not erase this line',
				'//svelteway-safe-cwd-declaration do not erase this line',
				'//svelteway-safe-fileToRead-declaration do not erase this line',
				'//svelteway-safe-themeFile-declaration do not erase this line',
				'//svelteway-safe-themeContent-declaration do not erase this line',
				'//svelteway-safe-content-declaration do not erase this line',
				'//svelteway-safe-source-data do not erase this line',
				'//svelteway-safe-file-data do not erase this line',
				'//svelteway-safe-theme-data do not erase this line'
			]
		};
		// eslint-disable-next-line @typescript-eslint/ban-ts-comment
		//@ts-ignore
		await replaceInFile(options);
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
