import React from 'react'
import {useStores} from '../stores/index'
import {observer} from 'mobx-react'
import {Warning, Hello} from './Tips.style'
import {IsMobileContext} from '../App'

const SayHello = observer(() => {
  const {UserStore} = useStores()
  return (
    <Hello>Hello {UserStore.currentUser.attributes.username}</Hello>
  )
})

const Component = observer(() => {
  const {UserStore} = useStores()
  const isMobile = React.useContext(IsMobileContext)
  return (
    <>
      {isMobile ?
        <><h1>sjsjjs</h1></>:
        <>{UserStore.currentUser ? <SayHello/> : <Warning>请先登陆再上传 </Warning>}</>}
    </>

  )
})

export default Component

