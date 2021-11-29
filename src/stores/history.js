import { makeAutoObservable } from "mobx";
import { Uploader } from '../models/index';
import { message } from 'antd';

class HistoryStore {
  list = [];
  isLoading = false;
  hasMore = true;
  page = 0;
  limit = 10;

  constructor() {
    makeAutoObservable(this);
  }

  append(newList) {
    this.list = this.list.concat(newList);
  }
  find() {
    console.log('history store find()')
    this.isLoading = true;
    Uploader.find(this.page, this.limit)
      .then(newList => {
        this.append(newList);
        this.page++;
        if (newList.length < this.limit) {
          this.hasMore = false;
        }
      }).catch(err => {
        message.error('加载失败')
      }).finally(() => {
        this.isLoading = false;
      })
  }
  reset() {
    this.list = [];
    this.isLoading = false;
    this.hasMore = true;
    this.page = 0;
  }
}
export default new HistoryStore()