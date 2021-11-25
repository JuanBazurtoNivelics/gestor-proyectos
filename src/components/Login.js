import React, { Component } from 'react';

class Login extends Component {
    render() {
        return (
            <div>
                <h1>Welcome</h1>
                <input placeholder="Username"></input>
                <input placeholder="Password"></input>
                <button>Login</button>
            </div>
        );
    }
}

export default Login;