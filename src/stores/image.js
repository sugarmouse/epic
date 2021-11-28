// 登陆注册
import { makeObservable, observable, action } from 'mobx';
import { Auth } from '../models/index';
import UserStore from './user'


class ImgStore {

  @observable filename
  constructor() {
    makeObservable(this)
  }
  
 
      
}

export default new ImgStore()