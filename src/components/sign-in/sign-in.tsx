import React, { useState } from "react";
import { $AUTH_API } from "../../hooks/api";
import { SignUp } from "../sign-up/sign-up";

export const SignIn = ()=>{

    async function submitHandler(email:string, password: string){
        console.log('signin', email, password)
        if(!email || !password){
            alert('не задан email или пароль')
            return
        }
        console.log(email, password)
        const context = {
            email: email,
            password: password
        }
        const res = await fetch('http://213.219.213.0:5000/auth/sign-in', {
            method: 'POST',
            // mode: '?cors',
            credentials: 'include',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(context)
        })
        
    }
    return(
        <SignUp onSubmit={submitHandler} title={'Вход'}/>
    )
} 