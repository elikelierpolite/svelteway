import type { LayoutServerLoad } from './$types';
export const load = (async ({ route }) => {
	return {
		data: {
			theme: "light"
		}
	};
}) satisfies LayoutServerLoad;