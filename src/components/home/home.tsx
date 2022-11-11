import React from "react";
import './home.css'
export const HomePage = ()=>{
    return (
        <>
            <div className='container'>
                <div>
                    PROFILE:
                </div>
                <div>
                    id: {localStorage.getItem('id')}
                </div>
                <div>
                    email: {localStorage.getItem('email')}
                </div>
            </div>
        </>

    )

}