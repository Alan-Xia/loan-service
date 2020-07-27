'use strict'

import express from 'express'
import bodyParser from 'body-parser'
import util from 'util'

export default () => {
  let app = express()

  // 处理跨域请求
  app.use( function (req, res, next) {
    res.header('Access-Control-Allow-Origin', '*');
    res.header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS, PUT, DELETE')
    res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With,content-type,X-Session-Token')
    next()
  })

  // 解析json/applicastoin
  app.use(bodyParser.json())
  //解析url后面的参数
  app.use(bodyParser.urlencoded({extended: true}))
  // 暴露端口方法
  app.listenAsync = util.promisify(app.listen)
  // 加载路由
  require(process.cwd() + "/app/routes/router.js")(app)

  return app

}