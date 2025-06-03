import "./employee-list.css";
import LayoutHeading from "../../components/LayoutHeading/LayoutHeading";
import delete_icon from "../../assets/delete-icon.png";
import edit_icon from "../../assets/editpen.png";
import Delete from "../../components/Delete/Delete";
import React, { useState, useEffect } from "react";

import datas from "../../data/data";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { type EmployeeState } from "../../store/employee/employee.types";
import { useGetEmployeeListQuery } from "../../api-service/employees/employees.api";
import { useDeleteEmployeeMutation } from "../../api-service/employees/employees.api";
const EmployeeInfoElement = ({
  data,
  status = false,
}: {
  data: string;
  status?: boolean;
}) => {
  return (
    <label
      className={"data-label".concat(
        status ? ` info-status info-status--${data}` : ""
      )}
    >
      {data}
    </label>
  );
};

export const EmployeeList = () => {
  const navigate = useNavigate();
  const [deleteEmployee] = useDeleteEmployeeMutation();

  const { data: employeeList } = useGetEmployeeListQuery({});
  console.log(employeeList);
  function handleEdit(e: React.MouseEvent, id:number) {
    e.stopPropagation();
    navigate(`/employees/edit/${id}`);
  }
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  //   const handleOpenDeleteModal = (e: React.MouseEvent) => {
  //     e.stopPropagation();
  //     setShowDeleteModal(true);
  //   };

  const handleCloseDeleteModal = (e: React.MouseEvent) => {
    e.stopPropagation();
    setShowDeleteModal(false);
  };
    const handleOpenDeleteModal = (e: React.MouseEvent, id: number) => {
    e.stopPropagation();
    setSelectedEmployeeId(id);
    setShowDeleteModal(true);
  };
  useEffect(() => {
    console.log("showDeleteModal:", showDeleteModal);
  }, [showDeleteModal]);

  const [statusFilter, setStatusFilter] = useState<string>("");
  const handleClick = (id: number) => {
    console.log("Clicked");
    navigate(`/employees/${id}`);
  };
  const employees = useSelector(
    (state: EmployeeState) => state.employee.employees
  );
  console.log("Redux Employees:", employees);
  const [selectedEmployeeId, setSelectedEmployeeId] = useState<number | null>(
    null
  );

  const filteredDatas =
    statusFilter && statusFilter !== "ALL"
      ? employeeList.filter((emp: any) => emp.status === statusFilter)
      : employeeList;

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
          ></LayoutHeading>
          <div className="table-header emp-info-row">
            <EmployeeInfoElement data="Employee Name" />
            <EmployeeInfoElement data="Employee ID" />
            <EmployeeInfoElement data="Joining Date" />
            <EmployeeInfoElement data="Role" />
            <EmployeeInfoElement data="Status" />
            <EmployeeInfoElement data="Experience" />
            <EmployeeInfoElement data="Action" />
          </div>
          {filteredDatas?.length === 0 ? (
            <p style={{ padding: "1rem" }}>No employees found.</p>
          ) : (
            filteredDatas?.map((emp: any) => (
              <div key={emp.employeeId} onClick={() => handleClick(emp.id)}>
                <div className="emp-info-row">
                  <EmployeeInfoElement data={emp.name} />
                  <EmployeeInfoElement data={emp.employeeId} />
                  <EmployeeInfoElement
                    data={
                      emp.dateOfJoining
                        ? new Date(emp.dateOfJoining)
                            .toISOString()
                            .substring(0, 10)
                        : "N/A"
                    }
                  />
                  <EmployeeInfoElement data={emp.role} />
                  <EmployeeInfoElement data={emp.status} status={true} />
                  <EmployeeInfoElement data={emp.experience} />
                  <div className="action-buttons-div">
                    <button onClick={(e)=>handleOpenDeleteModal(e,emp.id)}>
                      <img className="employee-delete-icon" src={delete_icon} />
                    </button>
                    <button onClick={(e) => handleEdit(e, emp.id)}>
                      <img className="employee-edit-icon" src={edit_icon} />
                    </button>
                  </div>
                </div>
                {showDeleteModal && (
                  <Delete
                    onConfirm={async (e: React.MouseEvent) => {
                      e.stopPropagation();
                      if (selectedEmployeeId != null) {
                        await deleteEmployee({ id: selectedEmployeeId });
                        setShowDeleteModal(false);
                        setSelectedEmployeeId(null);
                      }
                    }}
                    onClose={handleCloseDeleteModal}
                  />
                )}
              </div>
            ))
          )}
        </div>
      </div>
    </>
  );
};
