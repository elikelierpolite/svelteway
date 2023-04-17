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
		const svelteConfigFile = `${currentDirectory}/svelte.config.js`;
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
			const themeRegex = new RegExp(`data-theme="${theme}"`, 'm');
			const sveltewaySafeLayoutOtRegex = new RegExp(
				`<!-- svelteway-safe-layout-ot do not erase this line -->`,
				'm'
			);
			const sveltewaySafeLayoutCtRegex = new RegExp(
				`<!-- svelteway-safe-layout-ct do not erase this line -->`,
				'm'
			);
			const sveltewaySafeLayoutImportRegex = new RegExp(
				`// svelteway-safe-layout-import do not erase this line`,
				'm'
			);
			const sveltewaySafeLayoutThemeConstantRegex = new RegExp(
				`// svelteway-safe-theme-constant do not erase this line`,
				'm'
			);
			const sveltewaySafeLayoutCwdImportRegex = new RegExp(
				`// svelteway-safe-cwd-import do not erase this line`,
				'm'
			);
			const sveltewaySafeLayoutFsImportRegex = new RegExp(
				`// svelteway-safe-fs-import do not erase this line`,
				'm'
			);
			const sveltewaySafeLayoutCwdDeclarationRegex = new RegExp(
				`// svelteway-safe-cwd-declaration do not erase this line`,
				'm'
			);
			const sveltewaySafeLayoutFtrDeclarationRegex = new RegExp(
				`// svelteway-safe-fileToRead-declaration do not erase this line`,
				'm'
			);
			const sveltewaySafeLayoutFtrDeclarationRegex2 = new RegExp(
				`'currentDirectory'`,
				'g'
			);
			const sveltewaySafeLayoutFtrDeclarationRegex3 = new RegExp(
				`'/\${route.id}/'`,
				'm'
			);
			const sveltewaySafethemeFileDeclarationRegex = new RegExp(
				`// svelteway-safe-themeFile-declaration do not erase this line`,
				'm'
			);
			const sveltewaySafethemeContentDeclarationRegex = new RegExp(
				`// svelteway-safe-themeContent-declaration do not erase this line`,
				'm'
			);
			const sveltewaySafeContentDeclarationRegex = new RegExp(
				`// svelteway-safe-content-declaration do not erase this line`,
				'm'
			);
			const sveltewaySafeSourceDataRegex = new RegExp(
				`// svelteway-safe-source-data do not erase this line`,
				'm'
			);
			const sveltewaySafeFileDataRegex = new RegExp(
				`// svelteway-safe-file-data do not erase this line`,
				'm'
			);
			const sveltewaySafeThemeDataRegex = new RegExp(
				`// svelteway-safe-theme-data do not erase this line`,
				'm'
			);
			const sveltewaySvelteConfigRegex = new RegExp(
				`// for more information about preprocessors`,
				'm'
			);
			const options = {
				files: [layoutFile, layoutServerFile, svelteConfigFile],
				from: [
					sveltewaySafeLayoutOtRegex,
					sveltewaySafeLayoutCtRegex,
					sveltewaySafeLayoutImportRegex,
					sveltewaySafeLayoutThemeConstantRegex,
					themeRegex,
					sveltewaySafeLayoutCwdImportRegex,
					sveltewaySafeLayoutFsImportRegex,
					sveltewaySafeLayoutCwdDeclarationRegex,
					sveltewaySafeLayoutFtrDeclarationRegex,
					sveltewaySafeLayoutFtrDeclarationRegex2,
					sveltewaySafeLayoutFtrDeclarationRegex3,
					sveltewaySafethemeFileDeclarationRegex,
					sveltewaySafethemeContentDeclarationRegex,
					sveltewaySafeContentDeclarationRegex,
					sveltewaySafeSourceDataRegex,
					sveltewaySafeFileDataRegex,
					sveltewaySafeThemeDataRegex,
					sveltewaySvelteConfigRegex
				],
				to: [
					'<Layout {data}>',
					'</Layout>',
					'import { Layout } from "svelteway";',
					`const theme = JSON.parse(data.data.theme);`,
					`data-theme={theme}`,
					"import { cwd } from 'process';",
					"import fs from 'node:fs';",
					'const currentDirectory = cwd();',
					"const fileToRead =\r\n\t\troute.id == '/'\r\n\t\t\t? `${currentDirectory}/src/routes/+page.svelte`\r\n\t\t\t: `${currentDirectory}/src/routes/${route.id}/+page.svelte`;",
					"currentDirectory",
					"route.id",
					'const themeFile = `${currentDirectory}/static/theme.txt`;',
					'const themeContent = await fs.promises.readFile(themeFile);',
					'const content = await fs.promises.readFile(fileToRead);',
					"source: content.toString('utf8'),",
					'file: fileToRead,',
					"theme: JSON.stringify(themeContent.toString('utf8'))",
					`onwarn: (warning, handler) => {
						if (warning.code.startsWith('a11y-')) {
							return;
						}
						handler(warning);
					},`
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
		const themeFile = `${currentDirectory}/static/theme.txt`;
		const themeContent = await fs.promises.readFile(themeFile);
		const themeContent2 = JSON.stringify(themeContent.toString('utf8'));
		const theme = JSON.parse(themeContent2);
		if (fs.existsSync(`${currentDirectory}/src/routes/api/svelteway`)) {
			fs.rm(
				`${currentDirectory}/src/routes/api/svelteway`,
				{ recursive: true, force: true },
				() => {
					return;
				}
			);
		}
		const sveltewayLot = new RegExp('<Layout {data}>', 'm');
		const sveltewayCot = new RegExp('</Layout>', 'm');
		const sveltewayLi = /import \{ Layout \} from 'svelteway';/i;
		const sveltewayLi2 = new RegExp('import { Layout } from "svelteway";', 'm');
		const sveltewayTc = /const theme = JSON\.parse\(data\.data\.theme\);/i;
		const sveltewayCwd = /const currentDirectory = cwd\(\)/i;
		const sveltewayFtr =
			/const fileToRead = route\.id == '\/' \? `\$\{currentDirectory\}\/src\/routes\/\+page\.svelte` : `\$\{currentDirectory\}\/src\/routes\/\$\{route\.id\}\/\+page\.svelte`/i;
		const sveltewayFtr2 =
			/\tconst fileToRead = \t\troute\.id == '\/' \t\t\t\? `\$\{currentDirectory\}\/src\/routes\/\+page\.svelte` \t\t\t: `\$\{currentDirectory\}\/src\/routes\/\$\{route\.id\}\/\+page\.svelte`;/i;
		const sveltewayFtr3 =
			/const fileToRead = \t\troute\.id == '\/' \t\t\t\? `\$\{currentDirectory\}\/src\/routes\/\+page\.svelte` \t\t\t: `\$\{currentDirectory\}\/src\/routes\/\$\{route\.id\}\/\+page\.svelte`;/i;
		const sveltewayFtr4 = /currentDirectory/g;
		const sveltewayFtr5 = /\/\$\{route\.id\}\//i;
		const sveltewayTf = /const themeFile = `\$\{currentDirectory\}\/static\/theme\.txt`/i;
		const sveltewayThemec = /const themeContent = await fs\.promises\.readFile\(themeFile\);/i;
		const sveltewayC = /const content = await fs\.promises\.readFile\(fileToRead\);/i;
		const sveltewayDs = /source: content\.toString\('utf8'\),/i;
		const sveltewayDf = /file: fileToRead,/i;
		const sveltewayDt = /theme: JSON\.stringify\(themeContent\.toString\('utf8'\)\)/i;
		const options = {
			files: [layoutFile, layoutServerFile],
			from: [
				sveltewayLot,
				sveltewayCot,
				sveltewayLi,
				sveltewayLi2,
				sveltewayTc,
				sveltewayCwd,
				sveltewayFtr,
				sveltewayFtr2,
				sveltewayFtr3,
				sveltewayFtr4,
				sveltewayFtr5,
				sveltewayTf,
				sveltewayThemec,
				sveltewayC,
				sveltewayDs,
				sveltewayDf,
				sveltewayDt,
				/data-theme=\{theme\}/i,
				/import { cwd } from 'process';/g,
				/import fs from 'node:fs';/g,
			],
			to: [
				'<!-- svelteway-safe-layout-ot do not erase this line -->',
				'<!-- svelteway-safe-layout-ct do not erase this line -->',
				'// svelteway-safe-layout-import do not erase this line',
				'// svelteway-safe-layout-import do not erase this line',
				`// svelteway-safe-theme-constant do not erase this line`,
				'// svelteway-safe-cwd-declaration do not erase this line',
				'// svelteway-safe-fileToRead-declaration do not erase this line',
				'// svelteway-safe-fileToRead-declaration do not erase this line',
				'// svelteway-safe-fileToRead-declaration do not erase this line',
				'\'currentDirectory\'',
				'\'route.id\'',
				'// svelteway-safe-themeFile-declaration do not erase this line',
				'// svelteway-safe-themeContent-declaration do not erase this line',
				'// svelteway-safe-content-declaration do not erase this line',
				'// svelteway-safe-source-data do not erase this line',
				'// svelteway-safe-file-data do not erase this line',
				'// svelteway-safe-theme-data do not erase this line',
				`data-theme="${theme}"`,
				'// svelteway-safe-cwd-import do not erase this line',
				'// svelteway-safe-fs-import do not erase this line',
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
