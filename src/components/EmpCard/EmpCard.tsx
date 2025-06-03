import "./EmpCard.css";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { type EmployeeState } from "../../store/employee/employee.types";
import { useGetEmployeeQuery } from "../../api-service/employees/employees.api";

const EmpCard = () => {
  const { id } = useParams();

 const cond=Number(id)
const {data: emp}=useGetEmployeeQuery({id:cond})
   
  console.log("emp",emp)

 
//   const employees = useSelector((state: EmployeeState) => state.employee.employees);

    


  if (!emp) return <div>Employee not found</div>;

  return (
    <div className="body-full">
      <div className="card-row">
        <InfoElement label="Employee Name" data={emp.name} />
        <InfoElement
          label="Joining Date"
          data={emp.dateOfJoining?.substring(0, 10) || "N/A"}
        />
        <InfoElement label="Experience" data={`${emp.experience} Yrs`} />
        <InfoElement label="Role" data={emp.role} />
        <InfoElement label="Status" data={emp.status} status={true} />
      </div>
      <div className="divider-bar"> </div>
      <div className="card-row">
        <div className="label-data-box">
          <label className="info-label">Address</label>
          <label className="info-data">{emp.address?.line1 || "N/A"}</label>
          <label className="info-data">{emp.address?.line2 || ""}</label>
        </div>
        <InfoElement label="Employee ID" data={emp.employeeId} />
         <InfoElement label="Department" data={emp.department?.name} />
      </div>
    </div>
  );
};

const InfoElement = ({
  label,
  data,
  status = false,
}: {
  label: string;
  data: string;
  status?: boolean;
}) => {
  return (
    <div className="label-data-box">
      <label className="info-label">{label}</label>
      <label
        className={`info-data${status ? " info-status1" : ""}`}
      >
        {data}
      </label>
    </div>
  );
};

export default EmpCard;
