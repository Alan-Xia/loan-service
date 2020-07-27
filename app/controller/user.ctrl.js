'use strict'

import logger from '../utils/logger'
import * as Tool from '../utils/tool'
import * as userService from '../services/user.service'
const  routePath = {
  /**
   * @param 用户登录
   */
  login: function (req, res) {
    let {account,password} = req.body
    if (account && password) {
      userService.findUser(account,password).then(data => {
        if (data) {
          let result = Tool.getBackInfo(200,data,true,'登录成功')
          res.status(200).json(result)
        } else {
          let result = Tool.getBackInfo(401,'', false,'用户名或密码错误')
          res.status(401).json(result)
        }
      }).catch(err => {
        let result = Tool.getBackInfo(400,'',false,err)
        res.status(401).json(result)
        logger.info('登录失败')
      })
    }
  },
  /**
   * @param 新增用户
   */
  createUser: function (req, res) {
    let user = req.body
    userService.createUser(user).then(data => {
      let result = Tool.getBackInfo(200,data,true,'新增用户成功')
      res.status(200).json(result)
    }).catch(() => {
      let result = Tool.getBackInfo(200,'',fasle,'新增用户失败')
      res.status(200).json(result)
      logger.info('新增用户失败')
    })
  },

  updateUser: function (req, res) {
    let user = req.body
    userService.updateUser(user).then(data => {
      let result = Tool.getBackInfo(200,data,true,'修改用户成功')
      res.status(200).json(result)
    }).catch(() => {
      let result = Tool.getBackInfo(200,'',fasle,'修改用户失败')
      res.status(200).json(result)
      logger.info('新增用户失败')
    })
  }

}

export default routePath