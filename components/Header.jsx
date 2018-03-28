import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Headler = styled.ul`
  height: 68px;
  width: 100%;
  margin-bottom: 40px;
  background-color: #12887A;
  display: flex;
  list-style: none;
  a {
    margin: 10px;
    border-radius: 5px;
    background: #60B99A;
    color: #fff;
  	display: block;
  	padding: 15px;
  	text-decoration: none;
  }
`

export default () => (
  <Headler>
    <li><Link href="/">Home</Link></li>
    <li><Link href="/about">About</Link></li>
    <li><Link href="/users">User</Link></li>
  </Headler>
)
