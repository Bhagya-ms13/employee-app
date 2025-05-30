import { legacy_createStore as createStore } from 'redux';
import employeeReducer from './employee/employeeReducer';
const Store=createStore(employeeReducer)
export default Store