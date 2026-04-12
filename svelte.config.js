import adapter from '@sveltejs/adapter-static';

const repoName = 'INGENIERIA-3';
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true';
const base = process.env.BASE_PATH ?? (isGitHubPages ? `/${repoName}` : '');

/** @type {import('@sveltejs/kit').Config} */
const config = {
	kit: {
		adapter: adapter({
			fallback: '404.html'
		}),
		paths: {
			base
		},
		prerender: {
			handleHttpError: 'warn'
		}
	}
};

export default config;
