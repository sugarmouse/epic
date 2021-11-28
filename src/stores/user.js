// 用户信息存储
import { makeObservable, observable, action } from 'mobx';
import { Auth } from '../models/index'


class UserStore {

  @observable currentUser = null;

  constructor() {
    makeObservable(this);
  }

  @action pullUser() {
    this.currentUser = Auth.getCurrentUser()
  }
  @action resetUser() {
    this.currentUser = null;
  }


}

export default new UserStore()