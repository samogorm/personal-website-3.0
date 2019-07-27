import React, { Component } from 'react';
import './Logo.css';

class Logo extends Component {
    render() {
        return (
            <img src={this.props.image} className="brand-image" alt="App Logo" />
        )
    }
}

export default Logo;