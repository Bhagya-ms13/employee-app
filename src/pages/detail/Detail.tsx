import { useParams, useSearchParams } from "react-router-dom";
import { useState } from "react";
// import LayoutHeading from "../../components/LayoutHeading/LayoutHeading";
const Detail=()=>{
    const [age,setAge]=useState("");
    const [status,setStatus]=useState("");
    const[searchParams,setSearchParams]=useSearchParams();
    const [desc,setDesc]=useState("");
    const {id}=useParams();
    const getting=()=>{
        setStatus(searchParams.get("status")||"")
        setAge(searchParams.get("age")||"")
    }
    const setting=()=>{
        const newParam=new URLSearchParams(searchParams)
        newParam.set("status",desc)
       
        setSearchParams(newParam)
    }
   
    return(
        
           <div style={{marginLeft:"500px"}}>
            {/* <LayoutHeading title="Create Employee"></LayoutHeading> */}
             <h4 >employee id:{id}</h4>
             <div className="content" >status:details like name,email,phone,etc</div>
             <h4>Age is:{age}</h4>
             <h4>Status is:{status}</h4>
             <button onClick={setting}>Set</button>
             <input type="text" onChange={(e)=>setDesc(e.target.value)}></input>
             <button onClick={getting}>Get</button>
            
        </div>
       

        
       
    );
};
export default Detail;