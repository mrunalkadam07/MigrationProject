import PropTypes from 'prop-types';
import React, {useState} from "react";
import { Component } from "react";

export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
    }
    return (
        <div className="auth-form-container">
            <h3>Login</h3>
            <form className = "login-form" onSubmit = {handleSubmit}>
                <label htmlFor="email">email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type = "email" placeholder="youremail@gmail.com" id = "email" name = "email"></input>
                <label htmlFor="password">password</label>
                <input value = {password} onChange={(e) => setPassword(e.target.value)}type = "password" placeholder="********" id = "password" name = "password"></input>
                <button type = "submit">Log in</button>
            </form>
            <button className = "link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here!</button>
        </div>
        
    )
}

// Login.propTypes = {};

// Login.defaultProps = {};

// export default Login;
