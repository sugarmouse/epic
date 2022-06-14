import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import React from 'react'


export const Layout = (props) => {
  const {children, isShowHeader, isShowFooter} = props

  const Main = styled.main`
    flex-grow: 1;
    justify-content: center;
    align-items: center;
  `


  return (
    <>
      {isShowHeader && <Header/>}
      <Main>
        {children}
      </Main>
      {isShowFooter && <Footer/>}
    </>
  )
}

Layout.defaultProps = {
  isShowHeader: true,
  isShowFooter: true
}