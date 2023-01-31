import React, {useState} from "react";
import { useNavigate } from "react-router-dom";
import LoginServices from "../../Services/LoginServices";
import "./Assessment.list.css";
import axios from "axios";
import { ImageBackground } from "../ImageBackground";
import "./Login.css";


const services = new LoginServices();
export const Login = (props) => {
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [message, setMessage] = useState("");
    const navigate = new useNavigate();
    

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
            
        .catch((error)=>{
            console.log(error)
        })
    }
   
    return (
        <>
        <section class="vh-100">
  <div class="container-fluid h-custom">
    <div class="row d-flex justify-content-center align-items-center h-100">
      <div class="col-md-9 col-lg-6 col-xl-5">
        <img src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
          className="img-fluid" alt="Sample image">
        </img>
      </div>
      <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
        <form className="login-form" onSubmit = {handleSubmit}>
        <br/><br/><br/><br/>
          <div class="form-outline mb-4">
            <input value = {email} onChange={(e) => setEmail(e.target.value)} type="text" id="form3Example3" class="form-control form-control-lg"
              placeholder="Enter a valid Username" />
            {/* <label class="form-label" for="form3Example3">Username</label> */}<br/>
          </div>

          <div class="form-outline mb-3">
            <input value = {password} onChange={(e) => setPassword(e.target.value)} type="password" id="form3Example4" class="form-control form-control-lg"
              placeholder="Enter password" />
            {/* <label class="form-label" for="form3Example4">Password</label> */}<br/>
          </div>
          <div>
          <button  type="submit" className="btn btn-success">LOGIN </button> 
          </div>
        </form>
      </div>
    </div>
  </div>
</section>
        </>
        // <>
        // <div style={{ backgroundImage:`url("0001.jpg"})` }}>
        // <div className="container py-5 h-100">
        //     <form className = "login-form" onSubmit = {handleSubmit}>
        //         <div class="row d-flex justify-content-center align-items-center h-100">
        //             {/* <div class="col-12 col-md-8 col-lg-6 col-xl-5"> */}
        //                     <h3>Login</h3>
        //                          <input value = {email} onChange={(e) => setEmail(e.target.value)} type = "text" placeholder="Enter User" id = "email" name = "email"></input>
        //                          <input value = {password} onChange={(e) => setPassword(e.target.value)}type = "password" placeholder="********" id = "password" name = "password"></input>
        //                          <button type="submit" className="btn btn-primary" href="">LOGIN </button> 
        //             {/* </div> */}
        //         </div>
        //     </form>
        //     <br/>
        // </div>
        // </div>
        // </> 
    )
}