import adapter from '@sveltejs/adapter-static';

export default {
  kit: {
    adapter: adapter({
      pages: 'build',
      assets: 'build',
      fallback: null
    }),
    paths: {
      base: '/rr-inventory-manager', // important for GitHub Pages
    },
    trailingSlash: 'never' // <-- This is key
  }
};
