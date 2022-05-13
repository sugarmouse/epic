import React, {useEffect} from 'react'
import {observer} from 'mobx-react'
import Uploader from '../../components/Uploader'
import Tips from '../../components/Tips'
import {useStores} from '../../stores'


const Home = observer(() => {


  return (
    <>
      <Tips/>
      <Uploader/>
    </>

  )
})
export {Home}