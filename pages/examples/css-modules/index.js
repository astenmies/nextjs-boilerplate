import React from 'react';
import Template from '@templates/example';
import Head from 'next/head';
import {stylesheet, styles} from './index.scss'


export default () => (
<Template>
    <Head>
        <style dangerouslySetInnerHTML={{__html: stylesheet}} />
    </Head>

    <h2 className={styles.title}>
        CSS Modules by BEM
    </h2>
    <p className={styles.desc}>
        CSS Modules 在React中，我們以Web Component的方式實現應用。 <br/>
        組件（Component）的概念中有一個很重要特性：完整和自包含，而對於一個完整的Web Component，包含HTML，JAVASCRIPT和CSS。 <br/>
        React通過JSX實現了在JavaScript中寫HTML，但是還缺少一個重要的元素：CSS。 <br/>
        在2014年11月的NationJS上Christopher Chedeau談到了“CSS in JS”的話題。給許多人帶了思想上的一個衝擊，也讓React實現完整Web Component帶來的曙光。 <br/>
        現在，已經有了三種最新的，最明智和最可行的實現React樣式的方式。 <br/>
    </p>

</Template>
);
