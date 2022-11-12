import React, { useState } from "react";
import { redirect } from "react-router-dom";
import { $AUTH_API } from "../../hooks/api";
import { SignUp, User } from "../sign-up/sign-up";



export const SignIn = ()=>{
    const [user, setUser] = useState<User>({id:0,email:'',password:''})
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
            credentials: 'include',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(context)
        })
        const data = await res.json()
        console.log(data)
        setUser(data)
        localStorage.setItem('id', String(data.userDto.id))
        localStorage.setItem('email', data.userDto.email)
        if(data){
            // window.location.replace('/')
        }

    }
    return(
        <SignUp onSubmit={submitHandler} title={'Вход'} user={user}/>
        // {status? }
    )
} 