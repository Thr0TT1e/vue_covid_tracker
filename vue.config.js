const fs = require('fs')

module.exports = {
  configureWebpack: {
    devServer: {
      proxy: 'https://api .covid19api.com/',
      // host:    '0.0.0.0',
      // port:    8080,
      // headers: {"Access-Control-Allow-Origin": "*"},
      // https:   {
      //   key:  fs.readFileSync('.certs/example.com+5-key.pem'),
      //   cert: fs.readFileSync('.certs/example.com+5.pem'),
      // },
    },
  }
}