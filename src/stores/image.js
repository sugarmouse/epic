// 登陆注册
import { makeObservable, observable, action } from 'mobx';
import { Uploader } from '../models/index';



class ImgStore {

  @observable filename = '';
  @observable file = null;
  @observable isUploading = false;
  @observable serverFile = null;

  constructor() {
    makeObservable(this);
  }

  @action setFilename(newFilename) {
    this.filename = newFilename;
  }
  @action setFile(newFile) {
    this.file = newFile
  }
  @action setServerFile(newFile) {
    this.serverFile = newFile
  }
  @action setIsUploading(type) {
    this.isUploading = type
  }
  @action upload() {
    this.setServerFile(null);
    this.setIsUploading(true);
    return new Promise((resolve, reject) => {
      Uploader.add(this.filename, this.file)
        .then(serverFile => {
          this.setServerFile(serverFile)
          resolve(serverFile);
        }).catch(err => {
          reject(err);
        }).finally(() => {
          this.isUploading = false;
        })
    })
  }
  @action reset() {
    this.filename = '';
    this.file = null;
    this.isUploading = false;
    this.serverFile = null;
  }
}

export default new ImgStore()