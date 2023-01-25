import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import LoginServices from "../../Services/LoginServices";
import "./Login.css";
import axios from "axios";


const services = new LoginServices();
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const navigate = new useNavigate();
    
    // const emailRegex = /^[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*@[a-zA-Z0-9]+(?:\.[a-zA-Z0-9]+)*$/

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(email);
        //document.getElementById("error-message").innerHTML = ""
        if(email === "" && password === "")
        {
            alert("Enter Username and Password");
            console.log("Input fields are Empty");
            return
        }
        console.log("Data : ",email,password);
        const data = {
            user : email,
            pass : password
        }
        const url = "https://localhost:7277/User/Authenticate";
        axios.post(url,data).then((result)=>{
            localStorage.setItem("Token", result.data);
            if(result.data!="Unautorized")
            {
                navigate('/Navbar')
            }
            else{
            alert("Enter Valid Credentials");
            setEmail("");
            setPassword("");
            }
        
        })
        // services.LoginModel(data).then((res)=>{
        //     console.log(res.data)
        // }).then((res) =>{
        //     // sessionStorage.setItem('jwtToken',res.data)
        //     navigate("/Navbar")
        // })
            
        .catch((error)=>{
            console.log(error)
        })
    }
   
    return (
        <>
        <div className="auth-form-container">
            <h3>Login</h3>
            <form className = " form login-form" onSubmit = {handleSubmit}>
                <input value = {email} onChange={(e) => setEmail(e.target.value)} type = "text" placeholder="Enter User" id = "email" name = "email"></input>
                <input value = {password} onChange={(e) => setPassword(e.target.value)}type = "password" placeholder="********" id = "password" name = "password"></input>
                <button type="submit" className="btn btn-primary" href="">LOGIN </button> 
            </form>
            <br/>
        </div>
        </> 
    )
}