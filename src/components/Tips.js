import React from 'react'
import {useStores} from '../stores/index'
import {observer} from 'mobx-react'
import {Warning, Hello} from './Tips.style'

const SayHello = observer(() => {
  const {UserStore} = useStores()
  return (
    <Hello>Hello {UserStore.currentUser.attributes.username}</Hello>
  )
})

const Component = observer(() => {
  const {UserStore} = useStores()
  return (
    <>
      {UserStore.currentUser ? <SayHello/> : <Warning>请先登陆再上传 </Warning>}
    </>
  )
})

export default Component

