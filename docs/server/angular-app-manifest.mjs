
export default {
  bootstrap: () => import('./main.server.mjs').then(m => m.default),
  inlineCriticalCss: true,
  baseHref: '/',
  locale: undefined,
  routes: [
  {
    "renderMode": 2,
    "route": "/"
  }
],
  entryPointToBrowserMapping: undefined,
  assets: {
    'index.csr.html': {size: 647, hash: '6fdc4e1dc09ab48b4c509380561b3cc7adaa00427b7330469e60cb4685b2b50f', text: () => import('./assets-chunks/index_csr_html.mjs').then(m => m.default)},
    'index.server.html': {size: 1007, hash: '6308c7703bc617e6cfeedb2fdea0e61954b3a6e1bec29065fb7e1ccd99fff6e3', text: () => import('./assets-chunks/index_server_html.mjs').then(m => m.default)},
    'index.html': {size: 6842, hash: 'e2c6b8dbdfad6c366f55d76959690c9ba7efd73a3566c44cb411ab305c840b87', text: () => import('./assets-chunks/index_html.mjs').then(m => m.default)},
    'styles-WBMEIFRX.css': {size: 300, hash: 'HNWoOHgoC0k', text: () => import('./assets-chunks/styles-WBMEIFRX_css.mjs').then(m => m.default)}
  },
};
