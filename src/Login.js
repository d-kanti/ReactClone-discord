import { Button } from '@material-ui/core';
import React from 'react';
import './Login.css';
import {auth, provider} from './firebase';

function Login() {
    const signIn = () =>{
        //google login
        auth.signInWithPopup(provider).catch((error) => alert(error.massage)); 
    };


    return (
        <div className = "login">
            
            <div className="login__logo">
                <img 
                src="https://encrypted-tbn0.gstatic.com/
                images?q=tbn%3AANd9GcS3hBCo-uYbjprYDtx651fBPy
                ojSDKz3BSxlw&usqp=CAU"alt=""
                />
            </div>
            <Button onClick={signIn}>Sign In</Button>
        </div>
    );
}

export default Login;
