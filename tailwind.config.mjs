import('tailwindcss')

const defaultTheme = require('tailwindcss/defaultTheme')

export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			fontFamily: {
				sans: ['Roboto', ...defaultTheme.fontFamily.sans],
			},
			colors: {
				primary: {
					50: '#fffeea',
					100: '#fff9c5',
					200: '#fff285',
					300: '#ffe546',
					400: '#ffd51b',
					500: '#ffb400',
					600: '#e28a00',
					700: '#bb6002',
					800: '#984a08',
					900: '#7c3d0b',
					950: '#481f00',
				},
				secondary: {
					50: '#fdf2ff',
					100: '#fae3ff',
					200: '#f4c6ff',
					300: '#f199ff',
					400: '#e95dff',
					500: '#d921ff',
					600: '#c400ff',
					700: '#a400cf',
					800: '#8700a9',
					900: '#720689',
					950: '#4d005e',
				},
				tertiary: {
					50: '#edfff7',
					100: '#d5ffef',
					200: '#aeffe0',
					300: '#70ffc9',
					400: '#2bfdab',
					500: '#00ff9c',
					600: '#00c071',
					700: '#00965c',
					800: '#06754b',
					900: '#076040',
					950: '#003722',
				},
			},
		},
	},
	plugins: [],
}
