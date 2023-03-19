import { browser } from '$app/environment';

if (browser) {
	window.process = { env: { NODE_ENV: 'production' } };
}
