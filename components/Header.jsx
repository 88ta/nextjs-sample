import React from 'react'
import Link from 'next/link'

export default () => (
  <React.Fragment>
    <Link href="/">Home</Link>
    <Link href="/about">About</Link>
    <Link href="/users">User</Link>
  </React.Fragment>
)