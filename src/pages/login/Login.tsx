// import Button from "../../components/Button/Button";
// import Input from "../../components/Input/Input";

import LoginLeftPanel from "./components/loginLeftPanel/LoginLeftPanel";
import LoginRightPanel from "./components/loginRightPanel/LoginRightPanel";
import "./Login.css"



const Login=() => {
    // const [counter,setCounter] =useState(0);
    // function handleOnClick (){
    //     setCounter(counter+1);
    //     console.log(counter);
    // }
    // function decrementOnClick(){
    //     setCounter(counter-1);
    //     console.log(counter);
    // }

   
    

    return(
        <div className="container">
        <LoginLeftPanel></LoginLeftPanel>
        <LoginRightPanel></LoginRightPanel>


        {/* <p>{counter}</p>
         <button onClick={handleOnClick}>increment</button>

         <button onClick={decrementOnClick}>decrement</button> */}
  </div>
    )
    
}
export default Login;