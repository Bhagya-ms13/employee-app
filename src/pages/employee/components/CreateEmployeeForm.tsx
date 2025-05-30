import "./CreateEmployeeForm.css"
import Button from "../../../components/Button/Button"
import Input from "../../../components/Input/Input";
import Select from "../../../components/select/Select";
import info from "../../../data/data"
import { useState,useEffect} from "react";
import { useParams } from "react-router-dom";
import { useDispatch } from "react-redux";
export default function CreateEmployeeForm({editEmpId}:{editEmpId:number}){
  const empid=useParams()
    const employees=info
    const user=employees.find((e)=>e.employeeId==empid.id)
    const dispatch=useDispatch()
    const [values,setValues]=useState({
      employeeName: "",
      employeeAge:"",
      employeePassword:"",
      employeeId: "",
      joiningDate: "",
      department:"",
      Role: "",
      Status: "",
      Experience: "",
      Email:"",
      line1:"",
      line2:"",
      houseno:"",
      pincode:""
    })


useEffect(() => {
        if (user && empid) {
            setValues({
            employeeName: user.name,
            employeeAge: user.age || "",
            employeePassword: "",
            employeeId: user.employeeId,
            joiningDate: user.dateOfJoining,
            department: user.department || "",
            Role: user.role,
            Status: user.status,
            Email:user.email,
            Experience: user.experience,
            line1: user.address.line1 || "",
            line2: user.address.line2 || "",
            houseno: user.address.houseNo || "",
            pincode:user.address.pincode || "",
            });
        }
        else {
    
    setValues({
      employeeName: "",
      employeeAge: "",
      employeePassword: "",
      employeeId: "",
      joiningDate: "",
      department: "",
      Role: "",
      Status: "",
      Experience: "",
      Email:"",
      line1: "",
      line2: "",
      houseno: "",
      pincode: ""
    });
  }
},[empid,user]);
const handleSubmit=(e:React.FormEvent)=>{
  e.preventDefault()
 
  const action={type:'employee/CREATE',payload:values}
  dispatch(action)

}
     function create() {
        console.log("Created");
    }

    function cancel() {
        console.log("Cancelled");
    }
    return(
        <div className="mainbox">
        <form onSubmit={handleSubmit}>
          <div className="mainbody">
            <div className="fullrows">
              
              <Input type="textbox" value={values.employeeName} onChange={(e)=>setValues({...values, employeeName: e.target.value})}placeholder="Enter your name" label="Employee Name" ></Input>
              { editEmpId ? (
                                <Input type="textbox" label="EmployeeId" placeholder="EmpId"  value={values.employeeId} onChange={(e)=>setValues({...values, employeeId: e.target.value})}/>
                            ):("")
                            }
               <Input type="textbox" value={values.employeeAge} onChange={(e)=>setValues({...values, employeeAge: e.target.value})} placeholder="Employee Age" label="Employee Age"></Input>
               <Input type="password" placeholder="Employee Password" label="Employee Password" value={values.employeePassword} onChange={(e)=>setValues({...values, employeePassword: e.target.value})} ></Input>
              <Input type="textbox" placeholder="Joining Date" label="Joining Date" value={values.joiningDate} onChange={(e)=>setValues({...values, joiningDate: e.target.value})}></Input>
            
              <Input type="number" placeholder="Experience" label="Experience" value={values.Experience} onChange={(e)=>setValues({...values, Experience: e.target.value})}></Input>
               <Input type="textbox" placeholder="Email" label="Email" value={values.Email} onChange={(e)=>setValues({...values, Email: e.target.value})}></Input>
              <Select label="Department" name="Department" id="Department" options={['HR','Developer']} onChange={(e)=>setValues({...values, department: e.target.value})}></Select>
              
               <Select label="Role" name="role" id="role" options={['Software Developer','UI/UX Designer']} onChange={(e)=>setValues({...values, Role: e.target.value})} ></Select>
              
               <Select label="Status" name="status" id="status" options={['Status1','Status2']} onChange={(e)=>setValues({...values, Status: e.target.value})}></Select>

              
              </div>
              <div className="row" id="add">
                <label>Address</label>
                <input
                  type="textbox"
                  placeholder="houseNo"
                  className="custom-input"
                  value={values.houseno} onChange={(e)=>setValues({...values, houseno: e.target.value})}
                />
                <input
                  type="textbox"
                  placeholder="line1"
                  className="custom-input"
                  value={values.line1} onChange={(e)=>setValues({...values, line1: e.target.value})}
                />
                <input
                  type="textbox"
                  placeholder="line2"
                  className="custom-input"
                  value={values.line2} onChange={(e)=>setValues({...values, line2: e.target.value})}
                />
                 <input
                  type="textbox"
                  placeholder="pincode"
                  className="custom-input"
                  value={values.pincode} onChange={(e)=>setValues({...values, pincode: e.target.value})}
                />
              </div>
              <div className="row2">
               <Button type="submit" label="Create" variant="primary" onClick={create} />
               <Button type="button" label="Cancel" variant="secondary" onClick={cancel}/>
            </div>
            </div>
            </form>
            
          </div>
    )
}