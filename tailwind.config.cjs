/** @type {import('tailwindcss').Config} */
module.exports = {
	content: ['./src/routes/**/*.{svelte,js,ts}', './src/lib/**/*.{svelte,js,ts}'],
	theme: {
		daisyui: {
			themes: [
				'light',
				'dark',
				'cupcake',
				'bumblebee',
				'emerald',
				'corporate',
				'synthwave',
				'retro',
				'cyberpunk',
				'valentine',
				'halloween',
				'garden',
				'forest',
				'aqua',
				'lofi',
				'pastel',
				'fantasy',
				'wireframe',
				'black',
				'luxury',
				'dracula',
				'cmyk',
				'autumn',
				'business',
				'acid',
				'lemonade',
				'night',
				'coffee',
				'winter'
			]
		},
		extend: {}
	},
	plugins: [require('daisyui')]
};
