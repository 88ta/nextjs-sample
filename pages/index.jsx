import React from 'react'
import styled from 'styled-components'
import App from '../components/App'

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`
const Description = styled.div`
  line-height: 40px;
  height: 200px;
`

export default () => (
  <App
    title="Next.js - Home"
    description="This is top page of NextJS sample"
  >
    <Title>Home</Title>
    <Description>
      Next.js is a minimalistic framework for server-rendered React applications.
      Visit <a href="https://github.com/zeit/next.js/">Github</a> to get started with Next.js.
    </Description>
  </App>
)
