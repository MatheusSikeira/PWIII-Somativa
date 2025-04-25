import styles from "./select.module.css"

const Select = ({text, name, id, change, options}) => {
    return(
        <div className={styles.form_control}>

            <label htmlFor={name}>{text}</label>

            <select name={name} id={id} onChange={change}>

                <option value="0"> Selecione uma categoria</option>

                {options.map((option)=>(
                    <option value={option.cod_categoria} id={option.id_categoria}>{option.nome_categoria}</option>
                ))}

            </select>

        </div>
    );
}

export default Select;