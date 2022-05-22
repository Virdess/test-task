import React, { useState, useContext } from 'react'
import { BrowserRouter } from 'react-router-dom';
import {
    Route,
    Switch,
    Link,
    useHistory
} from "react-router-dom";
import axios from 'axios';

import HomeHeader from '../HomePage/HomeHeader'
import HomePage from '../HomePage/HomePage'
import { AuthContext } from '../../context/AuthContext'

import './AuthPage.scss'


const AuthPage = () => {

    const history = useHistory()

    const [form, setForm] = useState({
        email: '',
        password: '',
    })

    const { login } = useContext(AuthContext)

    const changeHandler = (event) => {
        setForm({
            ...form,
            [event.target.name]: event.target.value,
        });
        console.log(form)
    }

    const registerHandler = async () => {
        try {
            await axios.post('/api/auth/registration', { ...form }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
            history.push('/login')
        } catch (error) {
            console.log(error)
        }
    }

    const loginHandler = async () => {
        try {
            await axios.post('/api/auth/login', { ...form }, {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(response => {
                    login(response.data.token, response.data.userId)
                })
        } catch (error) {
            console.log(error)
        }
    }
    return (
        <BrowserRouter>
            <Switch>
                <React.Fragment>
                    <div className="container">
                        <div className="row">
                            <div className="col">
                                <div className="auth-page blue lighten-2 z-depth-3 hoverable">
                                    <Route className path="/login">

                                        <form className='form form-login  ' onSubmit={e => e.preventDefault()}>
                                            <h3 className='blue lighten-2 text-white mrgn-0'>
                                                Авторизация
                                            </h3>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input
                                                        name='email'
                                                        type='email'
                                                        className='validate text-white hoverable'
                                                        onChange={changeHandler}
                                                    />
                                                    <label htmlFor="email" className='text-white'>Email</label>
                                                </div>
                                                <div className="input-field col s12">
                                                    <input
                                                        name='password'
                                                        type='password'
                                                        className='validate text-white hoverable'
                                                        onChange={changeHandler}
                                                    />
                                                    <label htmlFor="password" className='text-white'>Password</label>
                                                </div>
                                            </div>
                                            <div className="row lgin-btns">
                                                <button onClick={loginHandler} className="wawes-effect wawes-light btn blue">
                                                    Войти
                                                </button>
                                                <Link to="/register" className="btn-outline btn-reg text-white">
                                                    Нет аккаунта?
                                                </Link>
                                            </div>
                                        </form>
                                    </Route>
                                    <Route path="/register">

                                        <form className='form form-register' onSubmit={e => e.preventDefault()}>
                                            <h3 className='text-white mrgn-0'>
                                                Регистрация
                                            </h3>
                                            <div className="row">
                                                <div className="input-field col s12">
                                                    <input
                                                        name='email'
                                                        type='email'
                                                        className='validate text-white hoverable'
                                                        onChange={changeHandler}
                                                    />
                                                    <label htmlFor="email" className='text-white'>Email</label>
                                                </div>
                                                <div className="input-field col s12">
                                                    <input
                                                        name='password'
                                                        type='password'
                                                        className='validate text-white hoverable'
                                                        onChange={changeHandler}
                                                    />
                                                    <label htmlFor="password" className='text-white'>Пароль</label>
                                                </div>
                                            </div>
                                            <div className="row lgin-btns">
                                                <button onClick={registerHandler} className="wawes-effect wawes-light btn blue">
                                                    Регистрация
                                                </button>
                                                <Link to="/login" className="btn-outline btn-reg text-white">
                                                    Уже есть аккаунт?
                                                </Link>
                                            </div>
                                        </form>
                                    </Route>

                                </div>

                            </div>
                            <div className="col s6">
                                <div className="row mt-4">
                                    <div className="homePage ">
                                        <HomeHeader />
                                    </div>
                                </div>

                            </div>
                        </div>
                        <div className="arr blue-text">
                            <p>Scroll down</p>
                            <i className="medium material-icons arr">keyboard_arrow_down</i>
                        </div>

                        
                    </div>
                    <HomePage />
                </React.Fragment>
            </Switch>
        </BrowserRouter>
    )
}

export default AuthPage