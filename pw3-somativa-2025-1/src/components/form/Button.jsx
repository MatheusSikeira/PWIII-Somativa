import styles from "./button.module.css";

const Button = ({title, onPress}) =>{

    // function saveBooks(){
    //     console.log("Olá mundo")
    // }
    
    //onclick para adicionar um evento no botão

    return(
        <div>
            <button onClick={onPress}>{title}</button>
        </div>
    );
}

export default Button;