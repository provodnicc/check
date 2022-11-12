import React, { FC, useState } from "react";
import './sign-up.css'
interface SignUpProps{
    user?: User
    title?: string ,
    onSubmit?: (email: string, password: string)=>void
}

export interface User{
    id: number,
    email:string,
    password: string
}
export const SignUp: FC<SignUpProps> = ({onSubmit, title ='Регистрация'})=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [user, setUser] = useState<User>({id:0,email:'',password:''})
    const submitSend = onSubmit? onSubmit: SendData
    
    async function SendData(email: string, password: string){
        if(!email || !password){
            alert('не задан email или пароль')
            return
        }
        console.log('signup', email, password)
        const context = {
            email: email,
            password: password
        }
        const res = await fetch('http://213.219.213.0:5000/auth/sign-up', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(context)
        })
        setUser(await res.json())
    }
    return ( 
        <div className="container">
            <div className="input">
                <input onChange={(e)=>setEmail(e.target.value) } placeholder='Введите Email тут' type="email" />
            </div>
            <div className="input">
                <input onChange={(e)=>setPassword(e.target.value)} placeholder='Введите пароль здесь' type="password" />
            </div>
            <div 
                className="btn"
                onClick={()=>
                    submitSend(email, password)
                }
            >{title}</div>
            <div>
                {user.id? 'User from server:'+ user.email: ''}
            </div>
        </div>
    )
}