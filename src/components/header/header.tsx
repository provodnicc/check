import React from "react";
import { Link, Route, Routes } from 'react-router-dom';
import { HomePage } from './../home/home';
import { SignIn } from './../sign-in/sign-in';
import {SignUp} from './../sign-up/sign-up'

import './header.css'


export const Header = ()=>{
    return(
        <>
            <header className="header">
                <div>
                    <Link to='/'>Главная</Link>
                </div>
                <div className='nav-block'>
                    <div>
                        <Link to='/sign-up'>Регистрация</Link>
                    </div>
                    <div>
                        <Link to='/sign-in'>Вход</Link>
                    </div>
                </div>

            </header>
            <Routes>
                <Route path='/' element={<HomePage/>}></Route>
                <Route path='/sign-up' element={<SignUp/>}></Route>
                <Route path='/sign-in' element={<SignIn/>}></Route>
            </Routes>
        </>

    )
    }