import "./Layout.css";
import { Outlet, useNavigate ,Navigate} from "react-router-dom";
import CreateNavBar from "../CreateNavBar/CreateNavBar";
const Layout = () => {
    // const navigate=useNavigate();
    const isLogged=()=>{
        const token=localStorage.getItem("isLogged");
        return token=="true"

    }
    if(!isLogged()) return <Navigate to="/"/>
      return (
    <div className="layout-container">
      <CreateNavBar />
      <div className="emp-header"></div>
      <Outlet />
    </div>
  );
   
  }


export default Layout;