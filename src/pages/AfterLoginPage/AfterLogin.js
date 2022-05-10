import {Layout} from '../../components/Layout'
import {Outlet} from 'react-router-dom'
import styled from 'styled-components'
import './layout.less'

const MyLayout = styled(Layout)`
  main{
    flex: 1;
    padding: 30px 100px;
  }
`

export const AfterLogin = () => {
  return (
    <MyLayout>
      <Outlet/>
    </MyLayout>
  )

}