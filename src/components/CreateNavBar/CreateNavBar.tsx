import { useNavigate } from 'react-router-dom'
import './CreateNavBar.css'
import Button from '../Button/Button'


function CreateNavBar () {
   const navigate=useNavigate()
      const handleemp=(e:React.FormEvent)=>{
        e.preventDefault();
        localStorage.setItem("isLogged","false")
        navigate("/")

           
        }
        const handleEmployeeList=(e:any)=>{
          e.preventDefault();
          navigate("/employees/list")
        }
         return (
        <div className="navbar">
        <img src="/assets/kv-logo.png" alt="Kv-logo" id="image1" />
        <nav>
          <a href="" className="box" onClick={handleEmployeeList}><img src="/assets/icon.svg" alt="icon" className="image2" /> Employee list</a>
          <Button label="Log Out" variant="secondary" onClick={handleemp} style={{transform: "translate(50px, 750px)"}}/>
        </nav>
      </div>
    )

        
    }
      
  
 
    


export default CreateNavBar