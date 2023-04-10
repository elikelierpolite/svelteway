import type { Actions } from './$types';
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
		} satisfies Actions;