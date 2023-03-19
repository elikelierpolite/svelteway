import type { LayoutServerLoad } from './$types';
import { cwd } from 'process';
import * as fs from 'fs';
import { json } from '@sveltejs/kit';

export const load = (async ({ route }) => {
  const currentDirectory = cwd().replace(/\\/g, '/')
  const fileToRead = route.id == '/' ? `${currentDirectory}/src/routes/+page.svelte` : `${currentDirectory}/src/routes/${route.id}/+page.svelte`
  const content = await fs.promises.readFile(fileToRead);
	return {
		data: {
      source: content.toString('utf8'),
      file: fileToRead
    }
	};
}) satisfies LayoutServerLoad;
