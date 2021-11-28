import React, { useState } from "react";
import LogoUrl from './logo.svg';
import { NavLink, useNavigate} from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { useStores } from '../stores/index';
import { observer } from 'mobx-react'

const Header = styled.header`
  display: flex;
  color: white;
  align-items: center;
  padding: 10px 100px;
  background-color: #02101f;
`;
const Logo = styled.img`
  height: 30px;
`;
const StyledLink = styled(NavLink)`
 color: #fff;
 margin-left: 30px;

 &.active {
   border-bottom: 1px solid #fff;
 }
`;
const Login = styled.div`
  margin-left: auto;
`;
const StyledButton = styled(Button)`
  margin: 10px;
`

const Component = observer(() => {
  const { UserStore, AuthStore } = useStores();
  const navigate = useNavigate();

  const handleLogin = () => {
    console.log('跳转到登陆页面')
    navigate('/login')
  };
  const handleLogout = () => {
    AuthStore.logout();
  };
  const handleRegister = () => {
    console.log('跳转到注册页面');
    navigate('/register');
  };

  return(
    <Header>
      <Logo src={LogoUrl} alt='logo' />
      <nav>
        <StyledLink to='/' activeclassname='active'>首页</StyledLink>
        <StyledLink to='/history' activeclassname='active'>上传历史</StyledLink>
        <StyledLink to='/about' activeclassname='active'>关于我</StyledLink>
      </nav>
      <Login>
        {
          UserStore.currentUser ?
            <>
              {UserStore.currentUser.attributes.username}<StyledButton type='primary' onClick={handleLogout}>注销</StyledButton>
            </> :
            <>
              <StyledButton type='primary' onClick={handleLogin}>登陆</StyledButton>
              <StyledButton type='primary' onClick={handleRegister}>注册</StyledButton>
            </>
        }
      </Login>
    </Header >
  );
})


export default Component