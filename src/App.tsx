import {
  createBrowserRouter,
  RouterProvider,
  Navigate,
} from "react-router-dom";
import NotFound from "./pages/notFound/notFound";

import Login from "./pages/login/Login";
import Employee from "./pages/employee/Employee";
// import Employee from './pages/employee/Employee'
import { Provider } from "react-redux";
import Store from "./store/store";

import "./App.css";
import Layout from "./components/layout/Layout";
import Detail from "./pages/detail/Detail";
import { EmployeeDetails } from "./pages/employee_detail/employee_detail";
import EmployeeEdit from "./pages/employee-edit/employee_edit"
import { EmployeeList } from "./pages/employee-list/employee-list";
function App() {
  // const isLogged = () => {
  //   const token = localStorage.getItem("isLogged");
  //   const flag = token === "true";
  //   console.log("flag", flag,token);

  //   return flag;
  // };
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Login/>
      // element:<Login></Login>
    },

    {
      path: "/employees",
      element:<Layout/>,
      // element: <Layout></Layout>,
      children: [{ index: true, element: <Employee /> },
        {path:":id",element:<EmployeeDetails/>},
        {path:"list",element:<EmployeeList/>},
        {path:"edit/:id",element:<EmployeeEdit/>},
       
       

      ],
      
    },
    {
      path: "*",
      element: <NotFound></NotFound>,
    },
  ]);

  return (
    <>
    <Provider store={Store}>
       <RouterProvider router={router} />

    </Provider>
     
    </>
  );
}

export default App;
