import "./employee-list.css";
import LayoutHeading from "../../components/LayoutHeading/LayoutHeading";
import delete_icon from "../../assets/delete-icon.png";
import edit_icon from "../../assets/editpen.png";
import Delete from "../../components/Delete/Delete";
import React, { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import datas from "../../data/data";
import { useSelector } from "react-redux";

const EmployeeInfoElement = ({
  data,
  status = false,
}: {
  data: string;
  status?: boolean;
}) => {
  return (
    <label
      className={
        "data-label".concat(status ? ` info-status info-status--${data}` : "")
      }
    >
      {data}
    </label>
  );
};

const EmployeeInfo = ({ data }: { data: any }) => {
  const navigate = useNavigate();
  const content=useSelector((state)=>state)
  function handleEdit(e: React.MouseEvent, employeeId: number | string) {
    e.stopPropagation();
    navigate(`/employees/edit/${employeeId}`);
  }
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const handleOpenDeleteModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDeleteModal(true);
  };

  const handleCloseDeleteModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDeleteModal(false);
  };
  useEffect(() => {
    console.log("showDeleteModal:", showDeleteModal);
  }, [showDeleteModal]);

  return (
    <>
      <div className="emp-info-row">
        <EmployeeInfoElement data={data.name} />
        <EmployeeInfoElement data={data.employeeId} />
        <EmployeeInfoElement data={data.dateOfJoining.substr(0, 10)} />
        <EmployeeInfoElement data={data.role} />
        <EmployeeInfoElement data={data.status} status={true} />
        <EmployeeInfoElement data={data.experience} />
        <div className="action-buttons-div">
          <button onClick={handleOpenDeleteModal}>
            <img className="employee-delete-icon" src={delete_icon} />
          </button>
          <button onClick={(e) => handleEdit(e, data.employeeId)}>
            <img className="employee-edit-icon" src={edit_icon} />
          </button>
        </div>
      </div>
      {showDeleteModal && <Delete onClose={handleCloseDeleteModal} />}
    </>
  );
};

export const EmployeeList = () => {
  const navigate = useNavigate();

 
  const [statusFilter, setStatusFilter] = useState("");

  const handleClick = (Id: any) => {
    console.log("Clicked");
    navigate(`/employees/${Id}`);
  };

  
  const filteredDatas = statusFilter
    ? datas.filter((emp) => emp.status === statusFilter)
    : datas;

  return (
    <>
      <div className="mainpage">
        <div className="details-child-component">
          <LayoutHeading
            title="Employee List"
            buttonType="create"
            buttonText="Create Employee"
            filter="true"
            statusFilter={statusFilter}         
            setStatusFilter={setStatusFilter}   
          />
          <div className="table-header emp-info-row">
            <EmployeeInfoElement data="Employee Name" />
            <EmployeeInfoElement data="Employee ID" />
            <EmployeeInfoElement data="Joining Date" />
            <EmployeeInfoElement data="Role" />
            <EmployeeInfoElement data="Status" />
            <EmployeeInfoElement data="Experience" />
            <EmployeeInfoElement data="Action" />
          </div>
          {filteredDatas.map((emp) => (
            <div key={emp.employeeId} onClick={() => handleClick(emp.employeeId)}>
              <EmployeeInfo data={emp} />
            </div>
          ))}
        </div>
      </div>
    </>
  );
};
