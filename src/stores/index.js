// 总入口
import { createContext, useContext } from "react";
import AuthStore from './auth';
import UserStore from './user';
import ImgStore from './image';

const context = createContext({
  AuthStore,
  UserStore,
  ImgStore
});
window.store = {
  AuthStore,
  UserStore,
  ImgStore
}

export const useStores = () => useContext(context)