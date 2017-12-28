import React from 'react'
import Link from 'next/link'
import styled from 'styled-components'
import Page from 'src/components/templates'


const Title = styled.h1`
  color: red;
  font-size: 50px;
`

export default () => (
    <Page>
        <Title>My page</Title>
        <ul>
            <li><Link href='/test/index' as='/test/index'><a>test-index</a></Link></li>
        </ul>
    </Page>
)
