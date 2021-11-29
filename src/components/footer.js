import React from "react";
import LogoUrl from './logo.svg';
import { NavLink, useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { Button } from 'antd';
import { useStores } from '../stores/index';
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