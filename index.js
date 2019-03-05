import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import './index.css';

class HelloWorld extends Component {
    constructor () {
        super()
    }

    render () {
        const { name } = this.props;
        return <div className="content">{`Hello, ${name} ！！！`}</div>
    }
}

const mountNode = document.getElementById("root");
ReactDOM.render(<HelloWorld name="Picker" />, mountNode);