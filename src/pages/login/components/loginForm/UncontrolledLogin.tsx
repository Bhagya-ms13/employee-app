import './loginForm.css'
import Button from '../../../../components/Button/Button';
import LoginInputField from '../loginInputField/LoginInputField';
import { useEffect, useState } from 'react';
import React from 'react';
import useMousePosition from '../../../../hooks/useMousePosition';

function LoginForm () {

    function login() {
        console.log("Logged in");
    }
   
    const userNameRef = React.useRef<HTMLInputElement>(null)
    const clearNameRef=React.useRef<HTMLButtonElement>(null)
 
     
    const clearUsername=()=>{
        if(userNameRef.current)
            userNameRef.current.value="";
        if(clearNameRef.current)
             clearNameRef.current.disabled=true;

    }
    const clearButton=(name:string)=>{
        if(!clearNameRef.current)return
        if(name.length > 0  ){
            clearNameRef.current.disabled=false;
            clearNameRef.current.onclick=clearUsername

        }
        else {
            
            clearNameRef.current.disabled=true;
        }
    }
 return (
        <>
        <form >
            {/* <label >Username</label> */}
            <LoginInputField type="text" placeholder="Username" onChange={(e)=>clearButton(e.target.value)}  ref={userNameRef} endAdornment={
                <button type="button" style={{float:'right',}} disabled={true} onClick={clearUsername} ref={clearNameRef}> clear</button>
            } />
            
            <LoginInputField type="password" placeholder="Password" />
            
            <Button type="submit" label="Log in" variant="primary" onClick={login} style={{width:'100% '}}/>
            {/* <p>{err}</p> */}
           
           
               
            
            
      

        </form>
        </>
        

    )
}

export default LoginForm