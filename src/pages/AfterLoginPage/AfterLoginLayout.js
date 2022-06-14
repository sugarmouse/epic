import {Layout} from '../../components/Layout'
import {Outlet} from 'react-router-dom'
import styled from 'styled-components'
import './layout.scss'
import {useEffect} from 'react'
import {useStores} from '../../stores'


const MyLayout = styled(Layout)`
  main {
    flex: 1;
    padding: 30px 100px;
  }
`

export const AfterLoginLayout = () => {

  const state = []

  useEffect(() => {
    refreshHandler()
  }, [state])

  const {UserStore, AuthStore} = useStores()

  const refreshHandler = () => {
    AuthStore.loginWithToken().then(() => {
      UserStore.pullUser()
    })
  }

  return (
    <MyLayout>
      <Outlet/>
    </MyLayout>
  )

}