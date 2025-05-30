import { useEffect, useState } from "react"

const useMousePosition=()=>{
    const [mousePosition,setMousePosition] = useState({x:0,y:0})
    useEffect(()=>{
        const handleEvent=(event:MouseEvent):void =>{
            setMousePosition({x:event.clientX,y:event.clientY})

        }
        window.addEventListener("mousemove",handleEvent)
        return()=>(
           window.removeEventListener("mousemove",handleEvent)
        )
        

    },[])
    return mousePosition;
    
}
export default useMousePosition;