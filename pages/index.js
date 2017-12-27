import React from 'react'
import Link from 'next/link'

export default () => (
  <ul>
    <li><Link href='/test/a' as='/test/a'><a>a</a></Link></li>
    <li><Link href='/test/b' as='/test/b'><a>b</a></Link></li>
  </ul>
)
