import {Button} from 'antd'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
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
export const Nav = styled.nav`
  height: 30px;
  display: flex;
`
export const Describe = styled.h1`
  color: whitesmoke;
  margin-bottom: 10vh;
`

export const Logo = styled.img`
  height: 30px;
  @media only screen and (max-width: 600px) {
    height: 20vh;
    margin-bottom: 10vh;

  }
`
export const StyledLink = styled(NavLink)`
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
export const Login = styled.div`
  margin-left: auto;
  @media only screen and (max-width: 600px) {
    margin: 0;

  }
`

export const ButtonWrapper = styled.div`
  @media only screen and (max-width: 600px) {
    display: flex;
    flex-direction: column;
  }
`
export const StyledButton = styled(Button)`
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