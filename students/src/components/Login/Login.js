import React, { Component } from 'react';
import axios from 'axios';

import './Login.css';

const loginURL = 'http://localhost:3005/login';

class Login extends Component {

    startAuth() {
        axios.get(loginURL).then(alert('Login sent!'))

    }


    render() {
        return(
            <div className="login-screen">
                <h3>Access Student Info Here:</h3>
                <a href={ loginURL }><button>Login</button></a>
            </div>
        )
    }
}

export default Login;