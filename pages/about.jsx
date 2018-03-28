import React from 'react'
import App from '../components/App'
import styled from 'styled-components'

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`

const Description = styled.div`
  line-height: 40px;
`

export default () => (
  <App title="Next.js - About">
    <Title>About</Title>
    <Description>
      Sushi (すし, 寿司, 鮨) is a Japanese dish of specially prepared vinegared rice (鮨飯 sushi-meshi), usually with some sugar and salt, combined with a variety of ingredients (ネタ neta), such as seafood (most commonly and often raw), vegetables, and occasionally tropical fruits. Styles of sushi and its presentation vary widely, but the key ingredient is "sushi rice", also referred to as shari (しゃり), or sumeshi (酢飯). The term sushi is no longer used in its original context and literally means "sour-tasting."

      Sushi can be prepared with brown rice, but traditionally it is made with medium grain white rice. It is often prepared with raw seafood, but some varieties of sushi use cooked ingredients such as calamari, eel, and imitation crab meat. Many others are vegetarian. Sushi is often served with pickled ginger (gari), wasabi (not to be confused with horseradish paste), and soy sauce (or tamari). Daikon radish is popular as a garnish.

      Sushi is sometimes confused with sashimi, a related Japanese dish consisting of thinly sliced raw fish, or occasionally meat, and an optional serving of rice.
    </Description>
  </App>
)
