import "./EmpCard.css";
import { useParams } from "react-router-dom";
import info from "../../data/data"

const EmpCard = () => {
  const { id } = useParams<{ id: string }>();
  
  const emp = info.find(e => e.employeeId === id);
  if (!emp) return <div>Employee not found</div>;
  return (
    <>
      <div className="body-full">
        <div className="card-row">
        <InfoElement label="Employee Name" data={emp.name} />
        <InfoElement label="Joining Date" data={emp.dateOfJoining.substr(0,10)} />
        <InfoElement label="Experience" data={emp.experience+" Yrs"} />
        <InfoElement label="Role" data={emp.role} />
        <InfoElement label="Status" data={emp.status} status={true}/>
        </div>
        <div className="divider-bar"> </div>
        <div className="card-row">
        <div className="label-data-box">
            <label className="info-label">Address</label>
            <label className="info-data">{emp.address.line1}</label>
            <label className="info-data">{emp.address.line2}</label>
        </div>
        <InfoElement label="Employee ID" data={id?id.toString():""} />
        </div>
      </div>
    </>
  );
};
const InfoElement = ({ label, data,status=false }: { label: string; data: string,status?:boolean }) => {
  return (
    <div className="label-data-box">
      <label className="info-label">{label}</label>
      <label className={"info-data ".concat(status?" info-status1":"")}>{data}</label>
    </div>
  );
};
export default EmpCard;