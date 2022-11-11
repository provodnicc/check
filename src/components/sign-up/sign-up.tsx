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
        await $AUTH_API.post('auth/sign-up', {
            data: JSON.stringify(context),
            headers: {
                'Content-Type': 'applications/json'
            },
        })
        // fetch('http://localhost:5000/auth/sign-up', {
        //     method: 'POST',
        //     headers: {
        //         'content-type': 'applications/json'
        //     },
        //     body: JSON.stringify(context)
        // })
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