import React, { useContext } from 'react'
import { AuthContext } from '../../context/AuthContext'
import {
    Link
} from "react-router-dom";


import './Navbar.scss'

const Navbar = () => {
    const { logout, isLogin } = useContext(AuthContext)

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <div className="container-fluid">
                <Link to={`/`} className="navbar-brand" onClick={logout}>To-Do</Link>
                <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
                    <span className="navbar-toggler-icon"></span>
                </button>
                <div className="collapse navbar-collapse" id="navbarNav">
                    {
                        isLogin
                                ? <ul className="navbar-nav">
                                    <li className="nav-item">
                                    <Link to='/login' className="nav-link active" onClick={logout} aria-current="page">Выйти</Link>
                                    </li>
                                </ul>
                                : <ul id="nav-mobile" className="right hide-on-med-and-down">
                                    <li className="nav-item">
                                        <a className="nav-link" aria-current="page">Войти</a>
                                    </li>
                                </ul>
                    }
                </div>
            </div>
        </nav>
    )
}

export default Navbar