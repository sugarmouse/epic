import LogoUrl from '../assets/img/logo.svg'
import styled from 'styled-components'


export const Logo = (props) => {
  const {size} = props

  const Img = styled.img`
    height: ${size || '30px'};
    @media only screen and (max-width: 600px) {
      height: 20vh;
      margin-bottom: 10vh;

    }
  `

  return (
    <Img src={LogoUrl} alt="logo"/>
  )
}
