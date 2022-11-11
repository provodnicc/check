import React, { FC, useState } from "react";
import { $AUTH_API } from "../../hooks/api";
import './sign-up.css'
interface SignUpProps{
    title?: string ,
    onSubmit?: (email: string, password: string)=>void
}
export const SignUp: FC<SignUpProps> = ({onSubmit, title ='Регистрация'})=>{
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    
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
        const res = await fetch('http://localhost:5000/auth/sign-up', {
            method: 'POST',
            headers:{
                'Content-Type':'application/json'
            },
            body: JSON.stringify(context)
        })
        console.log(await res.json())
    }
    return ( 
        <div className="container">
            <div>
                {title}
            </div>
            <div>
                <input onChange={(e)=>setEmail(e.target.value) } type="email" />
            </div>
            <div>
                <input onChange={(e)=>setPassword(e.target.value)} type="password" />
            </div>
            <button 
                onClick={()=>
                    submitSend(email, password)
                }
            >Готово</button>

        </div>
    )
}