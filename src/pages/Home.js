import React from "react";
import { observer } from 'mobx-react'
import { useStores } from '../stores/index';

const Home = observer(() => {
  const { UserStore } = useStores();
  return (
    <>
      <h1 style={{ color: 'red', }}>
        {
          UserStore.currentUser ?
            <>
              Hello {UserStore.currentUser.attributes.username}
            </> :
            '用户未登录'
        } </h1>
    </>
  )
})
export default Home