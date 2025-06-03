// import { legacy_createStore as createStore } from 'redux';
// import { legacy_createStore as createStore, applyMiddleware } from "redux";

// import logger from "redux-logger";

// import employeeReducer from './employee/employeeReducer';



// const Store = createStore(
//   employeeReducer,
//   undefined,
//   applyMiddleware(logger)
// );


// export default Store
import { configureStore } from "@reduxjs/toolkit";
import employeeReducer from "./employee/employeeReducer";
// import departmentReducer from "./department/departmentReducer";
import { useDispatch,useSelector, type TypedUseSelectorHook } from "react-redux";
import baseApi from "../api-service/api";
const store = configureStore({
  reducer: {
    employee: employeeReducer,
    // department: departmentReducer,
     [baseApi.reducerPath]: baseApi.reducer
  },
    middleware: (getDefaultMiddleware) => 
	
    getDefaultMiddleware().concat(baseApi.middleware)
	

});

export default store;

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
export type AppStore = typeof store

export const useAppDispatch = () => useDispatch<AppDispatch>()
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;