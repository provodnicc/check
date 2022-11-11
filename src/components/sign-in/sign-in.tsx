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
        await $AUTH_API.patch('auth/sign-in',{
            headers:{
                'content-type': 'applications/json',
            },
            data: context
        })
    }
    return(
        <SignUp onSubmit={submitHandler} title={'Вход'}/>
    )
} 