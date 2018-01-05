import React from 'react';
import Link from 'next/link';
import Page from '@templates';
// import styles from '@styles/page/about.scss'
// import styles from '@styles/page/about.scss'

export default () => (<Page>
  <div className={'aboutTitle'}> this is a</div> <br />
  <Link href="/test/index"><a>test/index</a></Link>
</Page>);
