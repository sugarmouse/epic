import {Outlet} from 'react-router-dom'
import {Layout} from '../components/Layout'
import webm from '../assets/home-page-background.webm'
import backgroundImg from '../assets/home-page-background.png'
import {Logo} from '../components/Logo'
import styled from 'styled-components'

const Div = styled.div`
  min-height: 100%;
  min-width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
`


export const IndexLayout = () => {

  return (
    <Layout backgroundColor={'rgba(0,0,0,0.4)'} isShowHeader={false} isShowFooter={false}>
      <Div>
        <video controls={false} playsInline autoPlay muted loop
               poster={backgroundImg} id="bgvid">
          <source src={webm} type="video/webm"/>
        </video>
        <div className='content'>
          <div className='basic-content'>
            <Logo size={'10rem'}/>
            <h1>你的移动图库</h1>
          </div>
          <Outlet/>
        </div>
      </Div>
    </Layout>
  )
}