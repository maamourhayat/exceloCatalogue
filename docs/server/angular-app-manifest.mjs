
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/mon-site-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/mon-site-angular"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 456, hash: 'eb63b812123bc3b7c81be5ac16c47caa285cc11f7e76ffd2bd4ab233b2e2dfcb', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 969, hash: '694407ad1e939c693530b4ad4029ed86f8e1111399aa07919929263b483e72b4', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 669, hash: 'eb8e9ae421ba95af23366668ba4419f163cc8a3818ec3a3d2ea82ca4e326b1d3', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
