import React, { Component } from 'react'
import axios from 'axios'

export default class Auth extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (event) => {
        this.setState({
            [event.target.key]: event.target.value
        });
    }

    login = () => {
        console.log(this.state);
        const { username, password } = this.state;
        console.log(username);
        // currently only sending the catch err. 
        axios.post('/api/auth/login', { username, password })
            .then(res => {
                this.props.setUser({ username, password });
                this.props.history.push('/dashboard');
            }).catch(err => {
                alert('Username and/or Password does not exist. Try again');
            })
        console.log(username);
    }

    register = () => {
        console.log(this.state);
        const { username, password, } = this.state;
        console.log(username, password);
        // only sending the catch. does not currently register new user. 
        axios.post('/api/auth/register', { username, password })
            .then(res => {
                console.log(username);
                this.props.setUser({ username, password });
                console.log(username);
                this.props.history.push('/dashboard');
            }).catch(err => {
                alert('Username and/or Password in use');
            });
    }

    render() {
        return (
            <div>
                <h1>Helo</h1>
                <span>Username:
                    <input type='text'
                        key='username'
                        onChange={this.handleChange} />
                </span>
                <span>Password:
                    <input type='password'
                        key='password'
                        onChange={this.handleChange} />
                </span>
                <button onClick={this.login}>Login</button>
                <button onClick={this.register}>Register</button>
            </div>
        )
    }
}
