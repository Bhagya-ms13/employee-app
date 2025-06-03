import "./CreateEmployeeForm.css";
import Button from "../../../components/Button/Button";
import Input from "../../../components/Input/Input";
import Select from "../../../components/select/Select";
import info from "../../../data/data";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { useAppDispatch } from "../../../store/store";
import { EMPLOYEE_ACTION_TYPES, EmployeeStatus } from "../../../store/employee/employee.types";
import { useSelector } from "react-redux";
import { type EmployeeState, type Employee } from "../../../store/employee/employee.types";
import { addEmployee } from "../../../store/employee/employeeReducer";
import { useCreateEmployeeMutation, useEditEmployeeMutation, useGetEmployeeQuery } from "../../../api-service/employees/employees.api";
import { useNavigate } from "react-router-dom";
import { useGetDepartmentsQuery } from "../../../api-service/department/department.api";
export default function CreateEmployeeForm({
  editEmpId,
}: {
  editEmpId: number;
}) {
  const navigate=useNavigate();
  const {id}= useParams();
   
  
  const empid=Number(id)
  const dept=useGetDepartmentsQuery({})
  const deptList=dept.data
  const deptarray=deptList?.map((obj:any)=>{return obj.id})
  // const deptarray=departments.map((department:any) => {
  //     {department.name}
  // }
   
  // )
  // console.log("hello",deptarray)

  const {data: emp}=useGetEmployeeQuery({id:empid})
  const [createEmployee]=useCreateEmployeeMutation();
  const [editEmployee]=useEditEmployeeMutation()
  console.log("emp",emp)
  console.log("empid",empid)
  // const employees = info;
  // const user = employees.find((e) => e.employeeId == empid.id);
  //  const employees = useSelector((state: EmployeeState) => state.employee.employees);

  // Find the employee by ID
  // const user = employees?.find((e) => e.employeeId === empid.id);

  // const user = editEmpId ? info.find((e) => e.employeeId == empid.id) : null;
  // const dispatch = useAppDispatch();

  const [values, setValues] = useState({
  
    employeeName: "",
    employeeAge: "",
    employeePassword: "",
    employeeId: "",
    joiningDate: "",
    Role: "",
    Status: "",
    Experience: "",
    Email: "",
    line1: "",
    line2: "",
    houseno: "",
    pincode: "",
    department_id:"",
  });

  useEffect(() => {
    if (emp && empid) {
      const formattedDate = emp.dateOfJoining?.split("T")[0] || "";
      setValues({
        
        employeeName: emp.name,
        employeeAge: String(emp.age) || "",
        employeePassword: "",
        employeeId: emp.employeeId,
        joiningDate: formattedDate,
        Role: emp.role,
        Status: emp.status,
        Email: emp.email,
        Experience: String(emp.experience),
        line1: emp.address.line1 || "",
        line2: emp.address.line2 || "",
        houseno: emp.address.houseNo || "",
        pincode: emp.address.pincode || "",
        department_id:String(emp.department?.id )|| ""
      });
      console.log("Values",values)
    } else {
      setValues({
        
        employeeName: "",
        employeeAge: "",
        employeePassword: "",
        employeeId: "",
        joiningDate: "",
        Role: "",
        Status: "",
        Experience: "",
        Email: "",
        line1: "",
        line2: "",
        houseno: "",
        pincode: "",
        department_id:""
      });
    }
  }, [empid, emp]);

  const handleSubmit = async (e: React.FormEvent) => {
    
    e.preventDefault();
    console.log("insideHandleSubit")
   
    console.log({values})
    const newEmployee = {
      
      employeeId: values.employeeId,
      email: values.Email,
      name: values.employeeName,
      age: Number(values.employeeAge),
      address: {
        houseNo: values.houseno,
        line1: values.line1,
        line2: values.line2,
        pincode: values.pincode,
      },
      password: values.employeePassword,
      role: values.Role,
      dateOfJoining: new Date(values.joiningDate),
      experience: Number(values.Experience),
      status: values.Status,
      department_id: Number(values.department_id),
    };
 
    console.log("editempId",editEmpId);
    // const action = { type: EMPLOYEE_ACTION_TYPES.CREATE, payload: newEmployee };
    // const action = user
    // ? { type: EMPLOYEE_ACTION_TYPES.UPDATE, payload: newEmployee }
    // : { type: EMPLOYEE_ACTION_TYPES.CREATE, payload: newEmployee };
    console.log("last")
    try{
      if(editEmpId!=1){
        await createEmployee(newEmployee).unwrap();
        console.log("newnewnew",newEmployee)
        console.log("inside create")
        alert("employee created successfully");
        navigate("/employees/list");
      }
      else{
        await editEmployee({payload:newEmployee,id:Number(empid)}).unwrap()
        console.log("newnew",newEmployee)
        console.log("inside edit")
        alert("employee updated successfully")
        navigate("/employees/list")
      }
    }catch(error){
      console.error(error)
    }

    // const action={ type: EMPLOYEE_ACTION_TYPES.CREATE, payload: newEmployee };


    // console.log("Dispatching action:", action);
    // dispatch(action);
    // dispatch(addEmployee(newEmployee))
    // alert("Employee Created Successfully");
  };

  function create() {
    console.log("Created");
  }

  function cancel() {
    console.log("Cancelled");
  }

  return (
    <div className="mainbox">
      <form key={editEmpId ?? "new"} onSubmit={handleSubmit}>
        <div className="mainbody">
          <div className="fullrows">
            <Input
              type="textbox"
              value={values.employeeName}
              onChange={(e) =>
                setValues({ ...values, employeeName: e.target.value })
              }
              placeholder="Enter your name"
              label="Employee Name"
            />
           
              <Input
                type="textbox"
                label="EmployeeId"
                placeholder="EmpId"
                value={values.employeeId}
                onChange={(e) =>
                  setValues({ ...values, employeeId: e.target.value })
                }
              />
          
            <Input
              type="textbox"
              value={values.employeeAge}
              onChange={(e) =>
                setValues({ ...values, employeeAge: e.target.value })
              }
              placeholder="Employee Age"
              label="Employee Age"
            />
            <Input
              type="password"
              placeholder="Employee Password"
              label="Employee Password"
              value={values.employeePassword}
              onChange={(e) =>
                setValues({ ...values, employeePassword: e.target.value })
              }
            />
            <Input
              type="textbox"
              placeholder="Joining Date"
              label="Joining Date"
              value={values.joiningDate}
              onChange={(e) =>
                setValues({ ...values, joiningDate: e.target.value })
              }
            />
            <Input
              type="number"
              placeholder="Experience"
              label="Experience"
              value={values.Experience}
              onChange={(e) =>
                setValues({ ...values, Experience: e.target.value })
              }
            />
            
            <Input
              type="textbox"
              placeholder="Email"
              label="Email"
              value={values.Email}
              onChange={(e) => setValues({ ...values, Email: e.target.value })}
            />
            <Select
              label="Department"
              name="Department"
              id="Department"
              value={values.department_id}
              options={deptarray? deptarray:["1"]}
              onChange={(e:any) =>
                setValues({ ...values, department_id: e.target.value })
              }
            />
            <Select
              label="Role"
              name="role"
              id="role"
              value={values.Role}
              options={["UI", "UX", "DEVELOPER", "HR"]}
              onChange={(e:any) => setValues({ ...values, Role: e.target.value })}
            />
            <Select
              label="Status"
              name="status"
              id="status"
              options={["ACTIVE", "INACTIVE", "PROBATION"]}
              value={values.Status}
              onChange={(e:any) => setValues({ ...values, Status: e.target.value })}
            />
          </div>
          <div className="row" id="add">
            <label>Address</label>
            <input
              type="textbox"
              placeholder="houseNo"
              className="custom-input"
              value={values.houseno}
              onChange={(e) =>
                setValues({ ...values, houseno: e.target.value })
              }
            />
            <input
              type="textbox"
              placeholder="line1"
              className="custom-input"
              value={values.line1}
              onChange={(e) => setValues({ ...values, line1: e.target.value })}
            />
            <input
              type="textbox"
              placeholder="line2"
              className="custom-input"
              value={values.line2}
              onChange={(e) => setValues({ ...values, line2: e.target.value })}
            />
            <input
              type="textbox"
              placeholder="pincode"
              className="custom-input"
              value={values.pincode}
              onChange={(e) =>
                setValues({ ...values, pincode: e.target.value })
              }
            />
          </div>
          <div className="row2">
            <Button
              type="submit"
              label="Create"
              variant="primary"
              onClick={handleSubmit}
            />
            <Button
              type="button"
              label="Cancel"
              variant="secondary"
              onClick={cancel}
            />
          </div>
        </div>
      </form>
    </div>
  );
}
