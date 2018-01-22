import React from 'react';
import Link from 'next/link';
import Template from '@layouts/example';


export default class Index extends React.Component {
    static getInitialProps ({ store, isServer }) {
        return { isServer }
    }

    componentDidMount() {

    }

    handleAddCounter(){
        const countDom = $('.counter');
        countDom.val(parseInt(countDom.val())+1);

    }

    render() {
        return (
            <Template>
                <input type="text" className="counter" value={0}/>
                <a href="javascript:;"
                   onClick={this.handleAddCounter}>+1</a>
            </Template>
        )
    }
}