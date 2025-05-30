import Button  from "../../components/Button/Button";
import  EmpCard  from "../../components/EmpCard/EmpCard";
import "./employee_detail.css";

import LayoutHeading from "../../components/LayoutHeading/LayoutHeading";
export const EmployeeDetails = () => {
  return (
    <>
    <div className="mainpage">
         <div className="details-child-component">
        <LayoutHeading title="Employee Details" buttonType="edit" buttonText="Edit"></LayoutHeading>

        
         <EmpCard />
      </div>
     

    </div>
     
    </>
  );
};