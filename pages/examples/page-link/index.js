import React from 'react';
import Link from 'next/link';
import Template from '@layouts/example';


export default () => (
  <Template>
    <ul>
      <li><Link href="/examples/page-link/index" as="/examples/page-link/index"><a>Index</a></Link></li>
      <li><Link href="/examples/page-link/about" as="/examples/page-link/about"><a>About</a></Link></li>
      <li><Link href="/examples/page-link/contact" as="/examples/page-link/contact"><a>Contact</a></Link></li>
    </ul>
    <h2>Index</h2>

  </Template>
);
