import style from './bookCards.module.css';
import Button from './Button.jsx';
import { useState } from 'react';


const BookCards = ({cod_livro, nome_livro, autor_livro, imagem})=>{

    const DeleteBook = async ()=>{
        await fetch("http://localhost:5000/excluirLivro/" + cod_livro,{
            method: "DELETE",
            headers:{
                "Content-Type":"application/json",
                "Access-Control-Allow-Origin": "*",
                "Access-Control-Allow-Headers": "*"
            }
        }).then((res)=> res.json).then(()=>{
            console.log("Deletado com sucesso")
        }).catch((e)=>{
            console.log("Error:" + e)
        })
    }

    return(
        <div className={style.bookCards} id={cod_livro}>

            <h3 className={style.title}>{nome_livro}</h3>

            <p className={style.autor}>{autor_livro}</p>

            <img src={imagem} alt='Uma imagem' className={style.imagem}/>

            <Button 
                label="Detalhe"
                router={'/detailBook/'}
                cod_livro={cod_livro}
            />

            <Button label="Excluir"/>
            
        </div>
    )
}

export default BookCards