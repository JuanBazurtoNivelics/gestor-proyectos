import React, { Component } from 'react';
import logo from '../../assets/images/nivelics.svg';
import Login from '../Login';
import './Home.css'

class Home extends Component {
    render() {
        return (
            <div className="home">
                <img className="logo" src={logo} alt="Nivelics"></img>
                <Login/>
            </div>
        );
    }
}

export default Home;