import React from 'react';
import Link from 'next/link';
import Page from '@templates';
import { translate } from 'react-i18next';
import i18n from '@i18next';
import Head from 'next/head';
import {stylesheet, styles} from '@styles/page/_index.scss'



function Home({ t, i18n }) {
  return (
    <Page>
      <Head>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />
      </Head>
      <div className={styles.title}> The Rock</div>
    </Page>
  );
}

const Extended = translate(['common'], { i18n, wait: process.browser })(Home);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
Extended.getInitialProps = async ({ req }) => {
  if (req && !process.browser) return i18n.getInitialProps(req, ['common']);
  return {};
};

export default Extended;
