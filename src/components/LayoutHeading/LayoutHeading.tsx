import './LayoutHeading.css'
import Button from '../Button/Button'
import { useNavigate, useParams, useSearchParams } from 'react-router-dom'
import editicon from '../../assets/edit-icon.svg'
import createicon from '../../assets/createicon.png'
import React from 'react';

function LayoutHeading({
  title,
  buttonType,
  buttonText,
  filter,
  statusFilter,
  setStatusFilter,
}: {
  title: string;
  buttonType?: string;
  buttonText?: string;
  filter?: string;
  statusFilter?: string;
  setStatusFilter?: (value: string) => void;
}) {
  let buttonDisplay = "none";
  let filterDisplay = "none";
  let icon = editicon;
  const statusOptions = ["ALL", "ACTIVE", "PROBATION", "INACTIVE"];
  const navigate = useNavigate();
  const [searchParams,setSearchParams]=useSearchParams("")
  const empid=useParams()
 
  if (buttonType) {
    buttonDisplay = "block";
    if (buttonType === "edit") icon = editicon;
    else if (buttonType === "create") icon = createicon;
  }
  if (filter) {
    filterDisplay = "block";
  }

  function handleNavigations() {
    if (buttonType === "edit") {
     
      navigate(`/employees/edit/${empid.id}`);
    } else {
      navigate('/employees');
    }
  }

  return (
    <>
      <div className="heading">
        <h1>{title}</h1>
      </div>
      <div className="filter-by-status-outer">
        <div className="filter-by-status" style={{ display: filterDisplay }}>
          <label>Filter By </label>
          <select
            value={statusFilter}
            onChange={(e) => {setStatusFilter && setStatusFilter(e.target.value)
             const newSearch=new URLSearchParams(searchParams)
            
              newSearch.set("filter",e.target.value)
            setSearchParams(newSearch)}}
          >
            {statusOptions.map((opt) => (
              <option key={opt} value={opt === "All" ? "" : opt}>
                {opt}
              </option>
            ))}
          </select>
        </div>
      </div>
      <div>
        <button
          style={{ display: buttonDisplay }}
          className="layout-button"
          onClick={()=>handleNavigations()}
        >
          <div className='button-image'>
            <img src={icon} alt="Icon" className="button-icon" />
          </div>
          <div className='button-text'>
            {buttonText}
          </div>
        </button>
      </div>
    </>
  );
}

export default LayoutHeading;
