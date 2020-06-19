import React from 'react';
import InputField from './InputField';
import SubmitButton from './SubmitButton';
import UserStore from './UserStore';
import loginbanner from '../../../Images/loginbanner.jpg';

class LoginForm extends React.Component {

    constructor(props) {
        super(props);
        this.state = {
            username: '',
            password: '',
            buttonDisabled: false
        }
    }

    setInputValue(property, val) {
        val = val.trim();
        if (val.length > 12) {
            return;
        }
        this.setState({
            [property]: val
        })
    }

    // Resets the form if user types wrong
    resetForm() {
        this.setState({
            username: '',
            password: '',
            buttonDisabled: false
        })
    }

    async doLogin() {
        if (!this.state.username) {
            return;
        }
        if (!this.state.password) {
            return;
        }
        this.setState({
            buttonDisabled: true
        })
        try {
            let res = await fetch('/login', {
                method: 'post',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                // This sends user and password to the API and checks if it exists
                body: JSON.stringify({
                    username: this.state.username,
                    password: this.state.password
                })
            });
            // If user is successfully logged in login propertys are set to true
            let result = await res.json();
            if (result && result.success) {
                UserStore.isLoggedIn = true;
                UserStore.username = result.username;
            }
            else if (result && result.success === false) {
                this.resetForm();
                alert(result.msg);
            }
        }
        catch (e) {
            console.log(e);
            this.resetForm();
        }
    }

    render() {
        return (
            <div className="Login">
                <img src={loginbanner} alt="festival people"/>
                <h2>LOGIN</h2>
                <div className="loginForm">
                <h4>Indtast login oplysninger:</h4>
                <p>Email/brugernavn:</p>
                <InputField
                    type='text'
                    placeholder='Username'
                    value={this.state.username ? this.state.username : ''}
                    onChange={(val) => this.setInputValue('username', val)}
                />
                <p>Adgangskode:</p>
                <InputField
                    type='password'
                    placeholder='Password'
                    value={this.state.password ? this.state.password : ''}
                    onChange={(val) => this.setInputValue('password', val)}
                />

                {/* Pressing button makes api call (doLogin) */}
                <SubmitButton
                    text='LOGIN'
                    disabled={this.state.buttonDisabled}
                    onClick={() => this.doLogin()}
                />
                <p>Glemt adgangskode?</p>
            </div>
            </div>
        );
    }
}

export default LoginForm;
