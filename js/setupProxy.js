const { createProxyMiddleware } = require('http-proxy-middleware')

module.exports = function (app) {
  app.use(
    'api',
    createProxyMiddleware({
      target: 'https://muo123.gitee.io/search.json',
      changeOrigin: true
    })
  )
}
