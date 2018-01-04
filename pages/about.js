import React from 'react';
import Link from 'next/link';
import Page from '@templates';

export default () => (<Page>
  <div className={'title'}> this is a</div> <br />
  <Link href="/test/index"><a>test/index</a></Link>
</Page>);
