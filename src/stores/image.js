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
  @action upload() {
    this.isUploading = true;
    return new Promise((resolve, reject) => {
      Uploader.add(this.filename, this.file)
        .then(serverFile => {
          this.serverFile = serverFile;
          resolve(serverFile);
        }).catch(err => {
          console.log('上传失败');
          reject(err);
        }).finally(() => {
          this.isUploading = false;
        })
    })
  }
}

export default new ImgStore()