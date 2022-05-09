import {Button} from 'antd'
import {NavLink} from 'react-router-dom'
import styled from 'styled-components'

export const Header = styled.header`
  display: flex;
  color: white;
  align-items: center;
  padding: 10px 100px;
  background-color: #000;
  @media only screen and (max-width: 600px) {
    padding: 2px 10px;
    flex-direction: column;
    align-items: flex-start;
    justify-content: flex-start;
  }
`
export const Nav = styled.nav`
  height: 30px;
  display: flex;
`

export const Logo = styled.img`
  height: 30px;
`
export const StyledLink = styled(NavLink)`
  color: #fff;
  margin-left: 30px;
  position: relative;

  @media only screen and (max-width: 600px) {
    margin-left: 4px;

  }

  &.active{
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
export const StyledButton = styled(Button)`
  margin: 10px;
  border-radius: 20px;
  border: none;

  &[attribute='login'] {
    background: rgb(54,179,48);

  }

  &[attribute='register'] {
    background: rgb(242,49,49);
  }

  @media only screen and (max-width: 600px) {
    margin: 4px;
    padding: 0 10px;
    border-radius: 10px;

  }
`