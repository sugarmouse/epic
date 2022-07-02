import React from 'react'
import {NavLink, useNavigate} from 'react-router-dom'
import {useStores} from '../stores/index'
import {observer} from 'mobx-react'
import styled from 'styled-components'
import {Button} from 'antd'
import {Logo} from './Logo'


const Header = styled.header`
  display: flex;
  color: white;
  align-items: center;
  padding: 10px 100px;
  background-color: #111;
  @media only screen and (max-width: 600px) {
    padding: 40px 0;
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
`
const Nav = styled.nav`
  height: 30px;
  display: flex;
`
const StyledLink = styled(NavLink)`
  color: #fff;
  margin-left: 30px;
  position: relative;

  @media only screen and (max-width: 600px) {
    margin-left: 4px;

  }

  &.active {
    border-bottom: 4px solid #ec5347;
    border-radius: 4px;
  }
`
const Login = styled.div`
  margin-left: auto;
  @media only screen and (max-width: 600px) {
    margin: 0;

  }
`

const ButtonWrapper = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`
const StyledButton = styled(Button)`
  margin: 10px;
  border-radius: 20px;
  border: none;

  &[attribute='login'] {
    background: rgb(54, 179, 48);
  }

  &[attribute='register'] {
    background: rgb(242, 49, 49);
  }

  @media only screen and (max-width: 600px) {
    width: 40vw;
    margin: 4px;
    padding: 0 10px;
    border-radius: 10px;

  }
`


const Component = observer(() => {
  const {UserStore, AuthStore, ImgStore} = useStores()
  const navigate = useNavigate()


  const handleLogin = () => {
    navigate('/in/login')
  }
  const handleLogout = () => {
    ImgStore.serverFile = null
    AuthStore.logout()
    navigate('/')
  }
  const handleRegister = () => {
    navigate('/in/register')
  }

  return (

    <Header>
      <Logo/>
      <Nav>
        <StyledLink to="/in" activeclassname="active">首页</StyledLink>
        <StyledLink to="/in/history" activeclassname="active">上传历史</StyledLink>
      </Nav>

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