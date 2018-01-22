import React from 'react';
import PropTypes from 'prop-types';

export default class ImButton extends React.Component {
    static getInitialProps() {
    }

    static propTypes = {
        children: PropTypes.string,
    };

    static defaultProps = {
        children: '',
    };

    handleClick = () => {
        alert('痛...');
    };

    render() {
        return <button onClick={this.handleClick}>{this.props.children}</button>;
    }
}

