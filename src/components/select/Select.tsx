import './Select.css'
function Select({label, name, id, options,onChange}:{  label: string,
  name: string,
  id: string,
  options: string[],onChange?:any}){
    return(
          <div className="row">
                <label>{label}</label>
                <select name={name} id={id} className="selectbox" onChange={onChange}>
           {options.map((option, index) => (
          <option key={index} value={option}>
            {option}
          </option>
        ))}
                </select>
            </div>
    )

  }
  export default Select