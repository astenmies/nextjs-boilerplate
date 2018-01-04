import React from 'react';
import Link from 'next/link';
import Page from '@templates';

export default () => (<Page>
    this is a <br />
  <Link href="/test/index"><a>test/index</a></Link>
</Page>);
