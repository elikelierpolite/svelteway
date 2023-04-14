import type { Actions } from './$types';
import { redirect } from '@sveltejs/kit';
import { Buffer } from 'node:buffer';
import fs from 'node:fs';
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
		const currentDirectory = cwd();
		const themeFile = `${currentDirectory}/static/theme.txt`;
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
