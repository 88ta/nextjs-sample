import React from 'react'
import styled from 'styled-components'
import Link from 'next/link'
import App from '../components/App'

const Title = styled.h1`
  font-size: 20px;
  font-weight: bold;
  margin-bottom: 20px;
`

const UserList = styled.ul`
  li {
    margin-bottom: 20px;
  }
  a {
    color: black;
    border-radius: 4px;
    text-decoration: none;
    display: block;
    padding: 40px;
      box-shadow: 0 1px 2px 0 rgba(40, 60, 80, 0.24), 0 -1px 2px 0 rgba(40, 60, 80, 0.12);

  }
`
export default () => (
  <App title="Next.js - Users">
    <Title>Users</Title>
    <UserList>
      {Array.from(new Array(20)).map((val, key) => (
        <li key={key}><Link href="/user/1">User</Link></li>
      ))}
    </UserList>
  </App>
)
