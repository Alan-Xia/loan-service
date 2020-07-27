'use strict'
// 配置文件
const config = {
  // 端口号
  port: process.env.PORT || 3333,
  // 数据库
  db: {
    databsae: 'jindu_loan',
    username: 'root',
    password: 'root',
    host: 'localhost',
    port: 3306,
    timezone: "+08:00", //时区
    dialect: "mysql",  //方言
    define:{ // 是否生成时间戳
      timestamps: false
    }
  }
}

export default config