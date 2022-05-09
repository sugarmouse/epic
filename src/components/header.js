import React from "react"
import LogoUrl from '../assets/img/logo.svg'
import { useNavigate } from 'react-router-dom'
import { useStores } from '../stores/index'
import { observer } from 'mobx-react'
import { Header, Logo, StyledLink, Login, StyledButton, Nav } from './Header.style.js'



const Component = observer(() => {
  const { UserStore, AuthStore, ImgStore } = useStores()
  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/login')
  }
  const handleLogout = () => {
    ImgStore.serverFile = null
    AuthStore.logout()
  }
  const handleRegister = () => {
    navigate('/register')
  }

  return (
    <Header>
      <Logo src={LogoUrl} alt='logo' />
      <Nav>
        <StyledLink to='/' activeclassname='active'>首页</StyledLink>
        <StyledLink to='/history' activeclassname='active'>上传历史</StyledLink>
      </Nav>
        
    
      <Login>
        {
          UserStore.currentUser ?
            <>
              {UserStore.currentUser.attributes.username}<StyledButton type='primary' onClick={handleLogout}>注销</StyledButton>
            </> :
            <>
              <StyledButton attribute='login' type='primary' onClick={handleLogin}>登陆</StyledButton>
              <StyledButton attribute='register' type='primary' onClick={handleRegister}>注册</StyledButton>
            </>
        }
      </Login>
    </Header >
  )
})


export default Component