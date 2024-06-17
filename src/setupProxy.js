const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function(app) {
  app.use(
    '/api',
    createProxyMiddleware({
      target: 'https://rpc01.trias.one',
      changeOrigin: true, // 是否跨域
      secure: false
    })
  )
}
