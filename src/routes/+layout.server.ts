import type { LayoutServerLoad } from './$types';
import { cwd } from 'process';
import * as fs from 'fs';

export const load = (async ({ route }) => {
  const currentDirectory = cwd().replace(/\\/g, '/')
  const fileToRead = route.id == '/' ? `${currentDirectory}/src/routes/+page.svelte` : `${currentDirectory}/src/routes/${route.id}/+page.svelte`
  const content = await fs.promises.readFile(fileToRead);
	return {
		data: JSON.stringify({
      source: content.toString('utf8')
    })
	};
}) satisfies LayoutServerLoad;
