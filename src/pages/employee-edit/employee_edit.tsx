// import Layout from "../../components/layout/Layout";
import LayoutHeading from "../../components/LayoutHeading/LayoutHeading";
import CreateEmployeeForm from "../employee/components/CreateEmployeeForm";

import "./employee_edit.css";
const EmployeeEdit = () => {
  return (
    <div className="mainpage">
      <div className="child-component">
        <LayoutHeading title="Edit Employee"></LayoutHeading>

        <CreateEmployeeForm editEmpId={1}/>
      </div>
    </div>
  );
};
export default EmployeeEdit;