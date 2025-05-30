// import "./Input.css"
// export default function Input(prop: {
//     type:string;
//     id:string;
//     placeholder:string
// }){
//     return(
//        <input type={prop.type} id={prop.id} placeholder={prop.placeholder} />
//     );
// }
import './Input.css'

function Input ({type, placeholder,label,value,onChange} : 
  {type: "textbox" | "number" |"password" | undefined, placeholder: string,label:string,value?:string,onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;}) {
return (
   <div className="row">
                <label className="label">{label}</label>
                <input
                  type={type}
                  placeholder={placeholder}
                  className="custom-input"
                  value={value}
                  onChange={onChange}
                />
    </div>
)
}

export default Input