import React, {useState} from "react";
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    
    // const emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        document.getElementById("error-message").innerHTML = ""

        if(email && password){
            //submit

            // if credentials match -> forward to menu page
            fetch("https://localhost:7277/api/Logins/Validate", {
                method : 'POST',
                headers : {
                    'Accept': 'application/json',
            'Content-Type': 'application/json',
            'Access-Control-Allow-Origin': '*' 
                },
                mode : 'cors',

                body : JSON.stringify({
                    'user' : email,
                    'pass' : password
                })
            })
            .then((data) => {
                console.log(data)
            })

            // else display error message
        }

        else{
            // error 
            document.getElementById("error-message").innerHTML = "Invalid Input"
        }
    }
    return (
        <div className="auth-form-container">
            <h3>Login</h3>
            <form className = "login-form" onSubmit = {handleSubmit}>
                <label htmlFor="email">email</label>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type = "text" placeholder="Enter Email" id = "email" name = "email"></input>
                <label htmlFor="password">password</label>
                <input value = {password} onChange={(e) => setPassword(e.target.value)}type = "password" placeholder="********" id = "password" name = "password"></input>
                <button type = "submit">Log in</button>
            </form>
            <br/>
            <div id="error-message"></div>

            <button className = "link-btn" onClick={() => props.onFormSwitch('register')}>Don't have an account? Register here!</button>
        </div>
        
    )
}