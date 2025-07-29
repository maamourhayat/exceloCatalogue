
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
    'index.csr.html': {size: 482, hash: 'f021ed3a195cc9263664c59ea47699dc3ba5d67deda8808288e093ada2184d73', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 995, hash: 'bc9a11b2ddaea836108d16e173743377fbd8c338372b40d3619bdea3e37d5a40', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 719, hash: '6a21e4beb5617496b2b8eb4d2cbeafa708d4a415c1d7053442ae46ac95b72b1a', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
