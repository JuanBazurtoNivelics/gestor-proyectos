import React, { Component } from 'react';
import logo from '../assets/images/nivelics.svg';
import Login from './Login';

class Home extends Component {
    render() {
        return (
            <div>
                <img src={logo} alt="Nivelics"></img>
                <Login/>
            </div>
        );
    }
}

export default Home;