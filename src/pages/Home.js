import React from "react";
import { observer } from 'mobx-react';
// import { useStores } from '../stores/index';
import Uploader from '../components/Uploader';
import Tips from '../components/Tips'

const Home = observer(() => {
  return (
    <>
      <Tips />
      <Uploader />
    </>
  )
})
export default Home