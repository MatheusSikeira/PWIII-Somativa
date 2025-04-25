import styles from "./Input.module.css"

const Input = ({type, name, id, placeholder, value, text, change})=>{
    return(
            <div className={styles.form_control}>

                <label htmlFor={name}>{text}</label>

                <input type={type} name={name} id={id} placeholder={placeholder} value={value} onChange={change}/>
            
            </div>
);
}

export default Input;

