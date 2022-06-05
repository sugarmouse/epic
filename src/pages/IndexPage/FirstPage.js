import {useNavigate} from 'react-router-dom'
import styled from 'styled-components'
import {Button} from 'antd'


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

export const FirstPage = () => {
  const navigate = useNavigate()


  const handleLogin = () => {
    navigate('/login')
  }
  const handleRegister = () => {
    navigate('/register')
  }

  return (
    <>
        <ButtonWrapper>
          <StyledButton attribute="login" type="primary" onClick={handleLogin}>登陆</StyledButton>
          <StyledButton attribute="register" type="primary" onClick={handleRegister}>注册</StyledButton>
        </ButtonWrapper>

    </>

  )
}