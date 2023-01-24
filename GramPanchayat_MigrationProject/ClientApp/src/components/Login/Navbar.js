import React from "react";

export const Navbar=()=>{
    return (
        <div>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
                <div className="container-fluid">
                    <a className="navbar-brand" href="/">
                        Gram Panchayat Management System
                    </a>
                </div>
            </nav>
            <nav className="navbar navbar-expand-lg bg-body-tertiary">
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
                                <button
                                    className="nav-link dropdown-toggle"
                                    href="/"
                                    role="button"
                                    id="dropdownMenuLink"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    REGISTRATION MASTER
                                </button>
                                <ul className="dropdown-menu" aria-labelledby="dropdownMenuLink">
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            BIRTH REG
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            DEAD BIRTH REG
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            MARRIAGE REG
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            DEATH REG
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item dropdown">
                                <button
                                    className="nav-link dropdown-toggle"
                                    role="button"
                                    data-bs-toggle="dropdown"
                                    aria-expanded="false"
                                >
                                    TAX MASTER
                                </button>
                                <ul className="dropdown-menu">
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            TAX PAID
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
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
                                        <a className="dropdown-item" href="/">
                                            BIRTH REG REPORT
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            DEAD BIRTH REG REPORT
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            MARRIAGE REG REPORT
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
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
                                        <a className="dropdown-item" href="/">
                                            TAX PAID REPORT
                                        </a>
                                    </li>
                                    <li>
                                        <a className="dropdown-item" href="/">
                                            ASSESSMENT LIST REPORT
                                        </a>
                                    </li>
                                </ul>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">
                                    ABOUT
                                </a>
                            </li>
                            <li className="nav-item">
                                <a className="nav-link" aria-current="page" href="/">
                                    EXIT
                                </a>
                            </li>
                        </ul>
                    </div>
                </div>
            </nav>
        </div>
    );
}
export default Navbar;
