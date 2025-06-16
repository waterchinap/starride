// @ts-check
import { defineConfig } from 'astro/config';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
	integrations: [
		starlight({
			title: 'My Rides',
			social: [{ icon: 'github', label: 'GitHub', href: 'https://github.com/withastro/starlight' }],
			sidebar: [
				{
					label: '关于',
					link: '/about'
				},
				{
					label: '我的骑行',
					autogenerate: { directory: '我的骑行' },
					collapsed: true
				},

			],
		}),
	],
});
