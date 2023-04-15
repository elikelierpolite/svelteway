import type { LayoutServerLoad } from './$types';
import { cwd } from 'process';
import fs from 'node:fs';
export const load = (async ({ route }) => {
	const currentDirectory = cwd();
	const fileToRead =
		route.id == '/'
			? `${currentDirectory}/src/routes/+page.svelte`
			: `${currentDirectory}/src/routes/${route.id}/+page.svelte`;
	const themeFile = `${currentDirectory}/static/theme.txt`;
	const content = await fs.promises.readFile(fileToRead);
	const themeContent = await fs.promises.readFile(themeFile);
	return {
		data: {
			source: content.toString('utf8'),
			file: fileToRead,
			theme: JSON.stringify(themeContent.toString('utf8'))
		}
	};
}) satisfies LayoutServerLoad;

export const prerender = true;
