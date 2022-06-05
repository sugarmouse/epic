import React, {useEffect} from 'react'
import {useStores} from '../stores/index'
import {observer} from 'mobx-react'
import {IsMobileContext} from '../App'
import styled from 'styled-components'


const Warning = styled.div`
  background: orange;
  padding: 10px;
  margin: 10px 0;
  color: #fff;
  border-radius: 4px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    text-align: center;
  }
`
const Hello = styled.div`
  background: #0073bf;
  padding: 10px;
  margin: 10px 0;
  color: #fff;
  border-radius: 4px;
  @media only screen and (max-width: 600px) {
    font-size: 20px;
    text-align: center;
  }
`


const SayHello = observer(() => {
  const {AuthStore, UserStore} = useStores()

  return (
    <Hello>Hello {UserStore.currentUser.attributes.username}</Hello>
  )
})

const Component = observer(() => {
  const {UserStore} = useStores()
  const isMobile = React.useContext(IsMobileContext)
  return (
    <>
      {UserStore.currentUser ? <SayHello/> : <Warning>请先登陆再上传 </Warning>}
    </>
  )
})

export default Component

