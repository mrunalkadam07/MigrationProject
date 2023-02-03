import React from "react";
import { useNavigate } from "react-router-dom";
import "./Assessment.list.css";
export const Navbar=()=>{
    const navigate = new useNavigate();
    const logout = () =>{
        localStorage.setItem("Token","");
        navigate("/login");
    }
    return (
       <>
        <div className="">
            <nav className="justify-content-center navbar navbar-expand-lg nav-dark bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        <strong style={{fontSize : 35}}>Gram Panchayat Management System</strong>
                    </a>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg nav-dark bg-body-tertiary">
                <div className="container-fluid">
                    <button
                        className="navbar-toggler"
                        type="button"
                        data-bs-toggle="collapse"
                        data-bs-target="#navbarSupportedContent"
                        aria-controls="navbarSupportedContent"
                        aria-expanded="false"
                        aria-label="Toggle navigation"
                    >
                        <span className="navbar-toggler-icon"></span>
                    </button>
                    <div className="collapse navbar-collapse" id="navbarSupportedContent">
                        <ul className="navbar-nav me-auto mb-2 mb-lg-0">
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    REGISTRATION MASTER
                                </a>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item" href="/birthRegistration">
                                            BIRTH REG
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/deadbirthRegistration">
                                            DEAD BIRTH REG
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/marriageRegistration">
                                            MARRIAGE REG
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/deathRegistration">
                                            DEATH REG
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    TAX MASTER
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="/propertyTaxPaid">
                                            TAX PAID
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/assessmentlist">
                                            ASSESSMENT LIST
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    REG REPORT
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="/bReport">
                                            BIRTH REG REPORT
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/deadbReport">
                                            DEAD BIRTH REG REPORT
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/marriageReport">
                                            MARRIAGE REG REPORT
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/dreport">
                                            DEATH REG REPORT
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <a
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    TAX REPORT
                                </a>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="/taxPaidReport">
                                            TAX PAID REPORT
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/assessmentReport">
                                            ASSESSMENT LIST REPORT
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" onClick={logout}>
                                    LOGOUT
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
        <div className="bg-image" style={{
            backgroundImage: "url('menupage.png')",
            height:'90vh',
            marginTop:'0px',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat'}}>
            
        </div>
        </>
    );
   
}
export default Navbar;
