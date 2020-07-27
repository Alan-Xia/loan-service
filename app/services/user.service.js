// 服务层

import models from '../models'  //  ./models等价于./models/index
const User = models.jd_user;

/**
 * 用户登录
 * @param {*} account 
 * @param {*} pwd 
 */
export function findUser(account, pwd) {
    return User.findOne({
        where: {
            account: account,   //左边的名字对应user模型名  右边是参数 
            password: pwd
        }
    })  //findOne--User模型自带的
}

/**
 * 新增用户
 * @param {*} user 
 */

export function createUser (user) {
  return User.create(user)
}

/**
 * 修改用户
 * @param {*} user 
 */

export function updateUser (user) {
    if (user && user.id) {
        return User.findByBK(user.id).then(u => {
            return u.update(user)
        })
    } else {
        logger.error("参数错误："+JSON.stringify(user))
    }
}
/**
 * 根据id删除用户
 * @param {*} id 
 */
export function deleteUser (uid) {
    return User.destroy({
        where: {
            id:uid
        }
    })
}

// 获取所有用户列表