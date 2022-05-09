// 登陆注册
import { makeAutoObservable } from 'mobx'
import { Uploader } from '../models/index'



class ImgStore {

  filename = '';
  file = null;
  isUploading = false;
  serverFile = null;

  constructor() {
    makeAutoObservable(this)
  }

  setFilename(newFilename) {
    this.filename = newFilename
  }
  setFile(newFile) {
    this.file = newFile
  }
  setServerFile(newFile) {
    this.serverFile = newFile
  }
  setIsUploading(type) {
    this.isUploading = type
  }
  upload() {
    this.setServerFile(null)
    this.setIsUploading(true)
    return new Promise((resolve, reject) => {
      Uploader.add(this.filename, this.file)
        .then(serverFile => {
          this.setServerFile(serverFile)
          resolve(serverFile)
        }).catch(err => {
          reject(err)
        }).finally(() => {
          this.isUploading = false
        })
    })
  }
  reset() {
    this.filename = ''
    this.file = null
    this.isUploading = false
    this.serverFile = null
  }
}

export default new ImgStore()