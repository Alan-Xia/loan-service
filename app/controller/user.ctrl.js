'use strict'

import logger from '../utils/logger'
import statusUser from '../utils/status.user'
const  routePath = {
  /**
   * @param 用户登录
   */
  login: function (req, res) {
    let {account,password} = req.body
    let user = {
      account: account,
      password: password
    }
    res.status(200).json(user)
  }

}

export default routePath