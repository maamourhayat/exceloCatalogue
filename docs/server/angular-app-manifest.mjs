
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: false,
  baseHref: '/mon-site-angular/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 158, hash: '2dff93b4ce6549d153de6dd83f21f273ebe8574f8df34b3c1279ea6e1126738f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 698, hash: '2b7437bec59888692fbd43d785b215714a9bb2f2bafaa7fb028bcaa96fbd7155', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 8770, hash: '6fd0fe2c08f49e5a13918b08913a686ade2a1350c37ee83d040c9ffec9e58400', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)}
  },
};
