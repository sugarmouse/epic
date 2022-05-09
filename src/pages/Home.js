import React from 'react'
import {observer} from 'mobx-react'
import Uploader from '../components/Uploader'
import Tips from '../components/Tips'
import {IsMobileContext} from '../App'

const Home = observer(() => {

  const isMobile = React.useContext(IsMobileContext)
  return (
    <>
      {isMobile ?
        <h1>mobile</h1>
        : <><Tips/><Uploader/></>}
    </>
  )
})
export {Home}