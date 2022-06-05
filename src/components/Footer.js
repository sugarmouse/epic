import React from "react";
import { observer } from 'mobx-react';
import styled from 'styled-components'

const Footer = styled.footer`
  height: 60px;
  padding: 10px 100px;
  background-color: #111;
`

const Component = observer(() => {
  return <Footer/>
})

export default Component