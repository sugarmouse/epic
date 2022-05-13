// 登陆注册
import {makeObservable, observable, action} from 'mobx'
import {Auth} from '../models/index'
import UserStore from './user'
import HistoryStore from './history'
import ImgStore from './image'


class AuthStore {

  values = {
    username: '',
    password: ''
  }

  constructor() {
    makeObservable(this, {
      values: observable,
      setPassword: action,
      setUsername: action,
      login: action,
      register: action,
      logout: action
    })
  }

  setUsername(username) {
    this.values.username = username
  }

  setPassword(password) {
    this.values.password = password
  }

  login() {
    return new Promise((resolve, reject) => {
      Auth.login(this.values.username, this.values.password)
        .then(user => {
          UserStore.pullUser()
          resolve(user)
        }).catch(err => {
        UserStore.resetUser()
        reject(err)
      })
    })
  }

  loginWithToken() {
    const token = Auth.getToken()
    return new Promise((resolve, reject) => {
      Auth.loginWithToken(token).then(user => {
        UserStore.pullUser()
      })
    })
  }

  register() {
    return new Promise((resolve, reject) => {
      Auth.register(this.values.username, this.values.password)
        .then(user => {
          UserStore.pullUser()
          resolve(user)
        }).catch(err => {
        UserStore.resetUser()
        reject(err)
      })
    })
  }

  logout() {
    Auth.logout()
    UserStore.resetUser()
    HistoryStore.reset()
    ImgStore.reset()
  }
}

export default new AuthStore()