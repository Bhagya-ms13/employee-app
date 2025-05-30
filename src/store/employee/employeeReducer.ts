import { type EmployeeActionTypes, type EmployeeState,EMPLOYEE_ACTION_TYPES,type EmployeeAction } from "./employee.types";
const initialState:EmployeeState={
    employees:[]
}

const employeeReducer=(state=initialState,action:EmployeeAction)=>{
 switch(action.type){
    case EMPLOYEE_ACTION_TYPES.DELETE:
        return state
    case EMPLOYEE_ACTION_TYPES.UPDATE:
        return state
    case EMPLOYEE_ACTION_TYPES.CREATE:
        console.log(state)
        return {...state,employees:[...state.employees,action.payload]}

    default:
        return state
 }

}
export default employeeReducer;