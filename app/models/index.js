//目录根文件
//将所有的数据模型文件都导出

import fs from 'fs' //node文件系统模块
import path from 'path'
import Sequelize from 'sequelize'
import config from '../../config/config'
import logger from '../utils/logger'

const db = {} //放入连接数据需要的信息
const con = config.db

let sequelize

try {
  sequelize = new Sequelize(con.databsae,con.username,con.password,con)
  logger.info('数据库连接成功')
} catch (error) {
  logger.error("数据库连接失败")
  throw error
}

//找到数据模型文件,以jd_开头的, 排除index.js
fs.readdirSync(__dirname).filter(fileName => {
  return fileName != 'index.js'
}).forEach(fileName => {
  // 导入文件             
  const model = sequelize.import(path.join(__dirname,fileName))
  db[model.name] = model
})

module.exports = db