import React from 'react'
import styled from 'styled-components'
import App from '../components/App'

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`

export default () => (
  <App
    title="Next.js - Home"
    description="This is top page of NextJS sample"
  >
    <Title>Home</Title>
  </App>
)
