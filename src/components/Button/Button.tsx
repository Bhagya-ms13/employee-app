import "./Button.css";
const Button = ({type,label,variant,onClick,style,icon,disabled} : 
    {type?: "submit" | "reset" | "button" | undefined,label?: string,variant?: string,onClick?: () => void,style?: React.CSSProperties,icon?:string,disabled?:boolean}) => {
    return (
        <div className='emp-button'>
            <button type={type} onClick={onClick} className={`button button--${variant}`} style={style} disabled={disabled}>
                {label}
                 <img src={icon}/>
                
                </button>
        </div>
        
    )
}
export default Button;