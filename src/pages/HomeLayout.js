import {Outlet} from 'react-router-dom'
import {Layout} from '../components/Layout'
import webm from '../assets/home-page-background.webm'
import backgroundImg from '../assets/home-page-background.png'


export const HomeLayout = () => {
  return (
    <Layout isShowHeader={false} isShowFooter={false}>
      <video controls={false} playsInline autoPlay muted loop
             poster={backgroundImg} id="bgvid">
        <source src={webm} type="video/webm"/>
      </video>
      <Outlet/>
    </Layout>
  )
}