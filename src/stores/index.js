// 总入口
import { createContext, useContext } from "react";
import AuthStore from './auth';
import UserStore from './user';
import ImgStore from './image';
import HistoryStore from './history';

const context = createContext({
  AuthStore,
  UserStore,
  ImgStore,
  HistoryStore
});
window.store = {
  AuthStore,
  UserStore,
  ImgStore,
  HistoryStore
}

export const useStores = () => useContext(context)