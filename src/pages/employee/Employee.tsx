// import Layout from "../../components/layout/Layout";
import LayoutHeading from "../../components/LayoutHeading/LayoutHeading";
import CreateEmployeeForm from "./components/CreateEmployeeForm";

import "./Employee.css";
const Employee = () => {
  return (
    <div className="mainpage">
      <div className="child-component">
        <LayoutHeading title="Create Employee"></LayoutHeading>

        <CreateEmployeeForm editEmpId={0}/>
      </div>
    </div>
  );
};
export default Employee;
