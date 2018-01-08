import Document, {Head, Main, NextScript} from 'next/document';
import {ServerStyleSheet} from 'styled-components';
import {stylesheet} from '@styles/styles.scss';

export default class MyDocument extends Document {
    static getInitialProps({renderPage}) {
        const sheet = new ServerStyleSheet();
        const page = renderPage(App => props => sheet.collectStyles(<App {...props} />));
        const styleTags = sheet.getStyleElement();
        return {...page, styleTags};
    }

    render() {
        return (
            <html>
            <Head>
                <link rel='stylesheet' type='text/css' href='/static/css/normalize.css' />
                <style dangerouslySetInnerHTML={{__html: stylesheet}}/>
                {this.props.styleTags}
            </Head>
            <body>
            {/* _document */}
            <Main/>
            <NextScript/>
            </body>
            </html>
        );
    }
}
