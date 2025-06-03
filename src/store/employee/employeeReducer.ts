// import { type EmployeeActionTypes,EMPLOYEE_ACTION_TYPES,type EmployeeAction,type EmployeeState } from "./employee.types";
// export const initialState:EmployeeState={
//     employees: JSON.parse(localStorage.getItem("employees") || "[]")
// }

// const employeeReducer=(state=initialState,action:EmployeeAction)=>{
//  switch(action.type){
//     case EMPLOYEE_ACTION_TYPES.DELETE:
//         const deleteEmployees = state.employees.filter(
//         (emp) => emp.employeeId !== action.payload
//   );
//   localStorage.setItem("employees", JSON.stringify(deleteEmployees));
//   return { ...state, employees: deleteEmployees };
//     case EMPLOYEE_ACTION_TYPES.UPDATE:
//         const updateEmployees = state.employees.map((emp) =>
//         emp.employeeId === action.payload.employeeId ? action.payload : emp
//       );
//       localStorage.setItem("employees", JSON.stringify(updateEmployees));
//       return { ...state, employees: updateEmployees };
//     case EMPLOYEE_ACTION_TYPES.CREATE:
//         console.log(state)
//         return {...state,employees:[...state.employees,action.payload]}
  
//     default:
//         return state
//  }

// }
// export default employeeReducer;
import { createSlice, type PayloadAction } from '@reduxjs/toolkit';
import type { Employee, EmployeeState } from './employee.types';

const initialState: EmployeeState = {
  employees: [],
};

export const employeeSlice = createSlice({
  name: 'employee',
  initialState,
  reducers: {
    addEmployee: (state, action: PayloadAction<Employee>) => {
      state.employees.push(action.payload);
    },
  },
});

export const { addEmployee } = employeeSlice.actions
export default employeeSlice.reducer;