import React from "react";
import './home.css'
export const HomePage = ()=>{
    return (
        <>
            {!localStorage.getItem('email') ? window.location.replace('/sign-in') : <div className='container'>
                <div>
                    PROFILE:
                </div>
                <div>
                    id: {localStorage.getItem('id')}
                </div>
                <div>
                    email: {localStorage.getItem('email')}
                </div>
            </div>}
        </>

    )

}