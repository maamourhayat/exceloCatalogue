
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/exceloCatalogue/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/exceloCatalogue"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 455, hash: '9d4dadacf2695eb3db6ef7f95e19907d63b669d96a520591f6d575d32f40bddd', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 968, hash: 'b41cdd253f9f5989245856be110dddc46b51247834540f8a4fa6040e69fbf6cd', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 668, hash: 'f6f49b4dda2533f2caa7bf4202717ab1ef53e247742bf7f9720b17c05fd088ad', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-5INURTSO.css': {size: 0, hash: 'menYUTfbRu8', text: () => import('./assets-chunks/styles-5INURTSO_css.mjs').then(m => m.default)}
  },
};
