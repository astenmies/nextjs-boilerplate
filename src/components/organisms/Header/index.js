import React from 'react'
import Head from 'next/head'
import styled from 'styled-components'
import NProgress from 'nprogress'
import Router from 'next/router'
import Link from 'next/link'


Router.onRouteChangeStart = (url) => {
    console.log(`Loading: ${url}`)
    NProgress.start()
}
Router.onRouteChangeComplete = () => NProgress.done()
Router.onRouteChangeError = () => NProgress.done()


const Box = styled.div`
  background-color: #000;
  color: #fff;
  opacity: .2;
`

export default () => (
    <div>
        <Head>
            {/* Import CSS for nprogress */}
            <link rel='stylesheet' type='text/css' href='/static/css/nprogress.css' />
        </Head>

        <Box>
            header
        </Box>
        <Link href='/index'><a>index</a></Link> |
        <Link href='/about'><a>about</a></Link> |
        <Link href='/contact'><a>contact</a></Link>
    </div>

)
