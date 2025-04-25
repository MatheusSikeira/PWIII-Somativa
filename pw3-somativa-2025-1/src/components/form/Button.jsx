import styles from "./button.module.css";

const Button = ({title, click}) =>{

    // function saveBooks(){
    //     console.log("Olá mundo")
    // }
    
    //onclick para adicionar um evento no botão

    return(
        <div>
            <button onClick={click}>{title}</button>
        </div>
    );
}

export default Button;