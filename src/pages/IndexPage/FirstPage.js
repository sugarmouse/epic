import {ButtonWrapper, StyledButton} from '../../components/Header.style'
import {useNavigate} from 'react-router-dom'


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
      <h1>
        <ButtonWrapper>
          <StyledButton attribute="login" type="primary" onClick={handleLogin}>登陆</StyledButton>
          <StyledButton attribute="register" type="primary" onClick={handleRegister}>注册</StyledButton>
        </ButtonWrapper>
      </h1>
    </>

  )
}