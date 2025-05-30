import './loginForm.css'
import Button from '../../../../components/Button/Button';
import LoginInputField from '../loginInputField/LoginInputField';
import { useEffect, useState } from 'react';
import React from 'react';
import useMousePosition from '../../../../hooks/useMousePosition';
import { useNavigate,Navigate} from 'react-router-dom';
import useLocalStorage from '../../../../hooks/useLocalStorage';


function LoginForm () {

    // function login() {
    //     console.log("Logged in");
    // }
        const isLogged=()=>{
        const token=localStorage.getItem("isLogged");
        return token=="true"

    }
    if(isLogged()) return <Navigate to="/employees"/>
    const navigate=useNavigate();
    const [username,setUsername]=useState("")
    const [password,setPassword]=useState("")
    const [showPass,setShowPass]=useLocalStorage("showPass","false")
    const [err,setErr]=useState("")
    const mousePosition=useMousePosition();
    const userNameRef = React.useRef<HTMLInputElement>(null)
    const handlelogin=(e:HTMLFormElement)=>{
        e.preventDefault();
        if(details.username===username && details.password===password){
            localStorage.setItem("isLogged","true")
            navigate("/employees")

           
        }
        else{
            alert("incorrect credentials")
        }
    }
    useEffect(() =>{console.log("clicked") 

           console.log(username);
           if(username.length>10){
             setErr('invalid username')
           }
           else{
            setErr('')
           }

     
    
    },[username]);
    useEffect (() => {
        if(userNameRef.current)
        userNameRef.current.focus();
    },[]);
    const details={username:"ms",password:"pass"}
 
    return (
        <>
        <form >
            {/* <label >Username</label> */}
            <LoginInputField type="text" value={username }placeholder="Username" onChange={(event) => setUsername(event.target.value)} style={{marginBottom:"-15px"}}ref={userNameRef} endAdornment={
                 <Button type="button" label="&times;" variant="secondary" onClick={() => setUsername("")} style={{margin:"0",width:"3px", transform: "translate(340px, -30px)",backgroundColor:"#fafafa",border:"none"}} /> 
            }/>
            {/* <p>The username is {username}</p> */}
            <LoginInputField type={JSON.parse(showPass) ? "text":"password"} value={password} placeholder="Password" onChange={(event) => setPassword(event.target.value)}/>
            {/* <p>the password is {password}</p> */}
            <Button type="submit" label="Log in" variant="primary" onClick={handlelogin} style={{width:'370px'}}/>
            {/* <p>{err}</p> */}
            {/* <p>x:{mousePosition.x} y:{mousePosition.y}</p> */}
           {/* <label>
        <input
          type="checkbox"
          checked={JSON.parse(showPass)}
          onChange={() => setShowPass((!JSON.parse(showPass)).toString())}
        />
        Show Password
      </label> */}
            
      

        </form>
        </>
        

    )
}

export default LoginForm