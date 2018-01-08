import React from 'react';
import Head from 'next/head';
import NProgress from 'nprogress';
import Router from 'next/router';
import Link from 'next/link';


Router.onRouteChangeStart = (url) => {
    NProgress.start();
};
Router.onRouteChangeComplete = () => NProgress.done();
Router.onRouteChangeError = () => NProgress.done();


export default () => (
    <div>
        <Head>
            {/* Import CSS for nprogress */}
            <link rel="stylesheet" type="text/css" href="/static/css/nprogress.css"/>
        </Head>

        <nav>
            <Link href="/examples/css-modules"><a>CSS-Modules</a></Link>
            <br/>
            <Link href="/examples/i18next"><a>i18Next</a></Link>
        </nav>
    </div>

);
