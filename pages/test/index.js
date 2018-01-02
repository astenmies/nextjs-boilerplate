import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Page from '@templates/sample'


const Title = styled.h1`
  color: blue;
  font-size: 50px;
`

export default () => (
    <Page>
        <ul>
            <li><Link href='/test/a' as='/test/a'><a>a</a></Link></li>
            <li><Link href='/test/b' as='/test/b'><a>b</a></Link></li>
        </ul>
        <Title>template/sample</Title>

    </Page>
)
