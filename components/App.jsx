import React from 'react'
import Head from 'next/head'
import Header from '../components/Header'

export default ({
  children,
  title,
  description,
}) => (
  <React.Fragment>
    <Head>
      <title>{title || 'Next JS'}</title>
      {description && (
        <meta name="description" content={description} />
      )}
    </Head>
    <Header />
    {children}
  </React.Fragment>
)