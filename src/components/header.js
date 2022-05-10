import React from 'react'
import LogoUrl from '../assets/img/logo.svg'
import {useNavigate} from 'react-router-dom'
import {useStores} from '../stores/index'
import {observer} from 'mobx-react'
import {Header, Logo, StyledLink, Login, StyledButton, Nav, ButtonWrapper} from './Header.style.js'
import {IsMobileContext} from '../App'
import {BounceCharComponent} from './BounceCharComponent'


const Component = observer(() => {
  const {UserStore, AuthStore, ImgStore} = useStores()
  const navigate = useNavigate()

  const isMobile = React.useContext(IsMobileContext)

  const handleLogin = () => {
    navigate('/in/login')
  }
  const handleLogout = () => {
    ImgStore.serverFile = null
    AuthStore.logout()
  }
  const handleRegister = () => {
    navigate('/in/register')
  }

  return (

    <Header>
      <Logo src={LogoUrl} alt="logo"/>
      {
        isMobile ?
          <></> :
          <Nav>
            <StyledLink to="/in/home" activeclassname="active">首页</StyledLink>
            <StyledLink to="/in/history" activeclassname="active">上传历史</StyledLink>
          </Nav>
      }
      {
        isMobile ?
          <>
          <BounceCharComponent char={'你的移动图片库'}/>
          </> :
          <></>
      }

      <Login>
        {
          UserStore.currentUser ?
            <>
              {UserStore.currentUser.attributes.username}<StyledButton type="primary"
                                                                       onClick={handleLogout}>注销</StyledButton>
            </> :
            <ButtonWrapper>
              <StyledButton attribute="login" type="primary" onClick={handleLogin}>登陆</StyledButton>
              <StyledButton attribute="register" type="primary" onClick={handleRegister}>注册</StyledButton>
            </ButtonWrapper>
        }
      </Login>
    </Header>
  )
})


export default Component