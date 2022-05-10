import Header from './Header'
import Footer from './Footer'
import styled from 'styled-components'
import React from 'react'


const Main = styled.main`
  flex-grow: 1;
`

export const Layout = (props) => {

  const {children, isShowHeader, isShowFooter} = props
  return (
    <>
      {isShowHeader && <Header/>}
      <Main>
        {children}
      </Main>
      { isShowFooter && <Footer/>}
    </>
  )
}

Layout.defaultProps = {
  isShowHeader: true,
  isShowFooter: true
}