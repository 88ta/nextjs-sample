import React from 'react'
import Head from 'next/head'
import styled, { injectGlobal } from 'styled-components'
import reset from 'styled-reset'
import Header from '../components/Header'
import Footer from './Footer';

const baseStyles = () => injectGlobal`
  ${reset}
`

const Main = styled.div`
  width: 500px;
  height: auto;
  margin: 0 auto;
`

export default ({
  children,
  title,
  description,
}) => {
  baseStyles()

  return (
    <React.Fragment>
      <Head>
        <title>{title || 'Next JS'}</title>
        {description && (
          <meta name="description" content={description} />
        )}
      </Head>
      <Header />
      <Main>
        {children}
      </Main>
      <Footer />
    </React.Fragment>
  )
}