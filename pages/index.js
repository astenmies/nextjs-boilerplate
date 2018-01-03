import React from 'react'
import Link from 'next/link'
import Page from '@templates'
import { translate } from 'react-i18next'
import i18n from '@i18n'


function Home ({ t,i18n }) {
    return (
        <Page>
            <div>
                {t('welcome')}
                <p>{t('common:integrates_react-i18next')}</p>
                <Link href='/about'><a>{t('link.gotoPage2')}2</a></Link>
                <button
                    onClick={() => { i18n.changeLanguage('zh-TW'); }}>繁體中文
                </button>
                <button
                    onClick={() => { i18n.changeLanguage('zh-CN'); }}>简体中文
                </button>
                <button
                    onClick={() => { i18n.changeLanguage('en-US'); }}>ENGLISH
                </button>
            </div>
        </Page>
    )
}

const Extended = translate(['common'], { i18n, wait: process.browser })(Home)

// Passing down initial translations
// use req.i18n instance on serverside to avoid overlapping requests set the language wrong
Extended.getInitialProps = async ({ req }) => {
    if (req && !process.browser) return i18n.getInitialProps(req, ['common'])
    return {}
}

export default Extended
