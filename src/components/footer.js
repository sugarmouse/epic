import React from "react";


import styled from 'styled-components';


import { observer } from 'mobx-react';

const Header = styled.header`
  height: 60px;
  padding: 10px 100px;
  background-color: #02101f;
`;

const Component = observer(() => {
  return <Header />
})

export default Component