'use strict'

import express from 'express'
import userCtrl from '../controller/user.ctrl'
import statusUser from '../utils/status.user'
let router = express.Router()

export default function (app) {
  // 登录
  router.route('/user/login').post(userCtrl.login)
  app.use('/api', router)
}