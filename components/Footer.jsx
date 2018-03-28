import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'

const Footer = styled.footer`
  height: 250px;
  width: 100%;
  margin: 40px 0 0;
  padding: 40px 0;
  background-color: #12887A;
  display: flex;
`

const FooterList = styled.ul`
  list-style: none;
  margin-right: 20px;
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

const FooterContent = styled.div`
  display: flex;
  margin: 0 auto;
`

const Title = styled.h2`
  font-size: 20px;
  text-align: center;
  margin-bottom: 20px;
  color: #ffffff;
`

export default () => (
  <Footer>
    <FooterContent>
      <FooterList>
        <li><Title>Link</Title></li>
        <li><Link href="/">Home</Link></li>
        <li><Link href="/about">About</Link></li>
        <li><Link href="/users">User</Link></li>
      </FooterList>
      <FooterList>
        <li><Title>About Me</Title></li>
        <li><a href="https://github.com/88ta">Github</a></li>
        <li><a href="https://twitter.com/88ta_">Twitter</a></li>
      </FooterList>
    </FooterContent>
  </Footer>
)
