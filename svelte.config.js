import adapter from '@sveltejs/adapter-static';
import sveltePreprocess from 'svelte-preprocess';

/** @type {import('@sveltejs/kit').Config} */
const config = {
  preprocess: sveltePreprocess({
    postcss: true
  }),
  kit: {
    adapter: adapter({
      fallback: '404.html'
    }),

    paths: {
      base: '/rr-inventory-manager', // important for GitHub Pages
    }
  }
};

export default config;