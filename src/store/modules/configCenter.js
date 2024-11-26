import { login, logout, getInfo } from '@/api/login'
import { listConfig } from '@/api/beautySystem/config'
import { getToken, setToken, removeToken } from '@/utils/auth'
import defAva from '@/assets/images/profile.jpg'

const useUserStore = defineStore(
  'configCenter',
  {
    state: () => ({
      token: getToken(),
      id: '',
      name: '',
      avatar: '',
      roles: [],
      permissions: []
    }),
    actions: {
      // 登录
      listConfig(userInfo) {
        return new Promise((resolve, reject) => {
          listConfig().then(res => {
            resolve([
              {
                store: '测试便利店',
                identity: '人像采取一群',
                position: '小王',
                status: '启用',
                config: '是',
                configTime: '2023-09-24 22:28:58',
                rules: '营额所得提成',
                totalCommissionStatus: true,
                totalCommissionCustom: false,
                singleOrderStatus: true,
                singleOrderCustom: false,
                remarks: ''
              },
              {
                store: '测试便利店',
                identity: '人像采取一群',
                position: '小李',
                status: '禁用',
                config: '否',
                configTime: '2023-09-24 22:28:58',
                rules: '营额所得提成',
                totalCommissionStatus: false,
                totalCommissionCustom: true,
                singleOrderStatus: false,
                singleOrderCustom: true,
                remarks: ''
              },
              // 可以根据需要添加更多示例数据
            ])
          }).catch(error => {
            reject(error)
          })
        })
      },
      // 获取用户信息
      getInfo() {
        return new Promise((resolve, reject) => {
          getInfo().then(res => {
            const user = res.user
            const avatar = (user.avatar == "" || user.avatar == null) ? defAva : import.meta.env.VITE_APP_BASE_API + user.avatar;

            if (res.roles && res.roles.length > 0) { // 验证返回的roles是否是一个非空数组
              this.roles = res.roles
              this.permissions = res.permissions
            } else {
              this.roles = ['ROLE_DEFAULT']
            }
            this.id = user.userId
            this.name = user.userName
            this.avatar = avatar
            resolve(res)
          }).catch(error => {
            reject(error)
          })
        })
      },
      // 退出系统
      logOut() {
        return new Promise((resolve, reject) => {
          logout(this.token).then(() => {
            this.token = ''
            this.roles = []
            this.permissions = []
            removeToken()
            resolve()
          }).catch(error => {
            reject(error)
          })
        })
      }
    }
  })

export default useUserStore
