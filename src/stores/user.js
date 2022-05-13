// 用户信息存储
import {  makeAutoObservable } from 'mobx'
import { Auth } from '../models/index'


class UserStore {

  currentUser = null;

  constructor() {
    makeAutoObservable(this)
  }
  pullUser() {
    this.currentUser = Auth.getCurrentUser()
  }
  resetUser(use=null) {
    this.currentUser = use
  }

}

export default new UserStore()