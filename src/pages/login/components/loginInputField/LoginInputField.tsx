import './LoginInputField.css'
function LoginInputField ({type,value, placeholder,onChange,ref,endAdornment,style} : {type: "text" | "number" |"password" | undefined, value?:string,placeholder: string,onChange?:(event:React.ChangeEvent<HTMLInputElement>)=>void,ref?:React.RefObject<HTMLInputElement| null>,endAdornment?:React.ReactNode,style?: React.CSSProperties}) {
   
return (
    
    <div className='input-box'>
        <input className='input-text' value={value} type={type} onChange={onChange} ref={ref} style={style} />
        <label className='input-text-label'>{placeholder}</label>
        {endAdornment ? endAdornment : null}
    </div>
    
)
}

export default LoginInputField