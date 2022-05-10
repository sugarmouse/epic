import {Outlet} from 'react-router-dom'
import {Layout} from '../components/Layout'
import {BounceCharComponent} from '../components/BounceCharComponent'


export const IndexPage = () => {
  return (
    <Layout isShowHeader={false} isShowFooter={false}>
      <BounceCharComponent char={'你的移动图库'}/>
      <Outlet/>
    </Layout>
  )
}