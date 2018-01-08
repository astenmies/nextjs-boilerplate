import React from 'react';
import Template from '@templates/example';
import {translate} from 'react-i18next';
import i18n from '@i18next';


function Home({t, i18n}) {
    return (
        <Template>
            <div>
                <h2>i18Next 多國語系</h2>

                <button
                    onClick={() => {
                        i18n.changeLanguage('zh-TW');
                    }}
                >繁體中文
                </button>
                <button
                    onClick={() => {
                        i18n.changeLanguage('zh-CN');
                    }}
                >简体中文
                </button>
                <button
                    onClick={() => {
                        i18n.changeLanguage('en-US');
                    }}
                >ENGLISH
                </button>

                <br/>
                <br/>
                <div>{t('welcome')}</div>

            </div>
        </Template>
    );
}

const Extended = translate(['common'], {i18n, wait: process.browser})(Home);

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
Extended.getInitialProps = async ({req}) => {
    if (req && !process.browser) return i18n.getInitialProps(req, ['common']);
    return {};
};

export default Extended;
