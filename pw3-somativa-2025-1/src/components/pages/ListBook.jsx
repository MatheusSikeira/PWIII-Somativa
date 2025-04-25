import React, {useState, useEffect} from "react";
import style from "./listBook.module.css";
import cavernas from "../../assets/cavernas_aco.jpg";
import BookCard from '../BookCards.jsx';

const ListBook = () => {
    
    const [book, setBook] = useState([]);

    useEffect(()=>{
        fetch('http://localhost:5000/listagemLivros', {
            method:'GET',
            mode: 'cors',
            headers:{
                'Content-Type': 'application/json',
                'Access-Control-Allow-Origin': '*',
                'Access-Control-Allow-Headers': '*'
            }
        }).then((res)=> res.json()).then((data)=>{
            console.log(data.data)
            setBook(data.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[]);

    return(

        <section>

            <h1>Listar Livros</h1>

            <BookCard

            title = 'TESTE DE TITULO DE LIVRO'
            autor = 'TESTE DE AUTOR DE LIVRO'
            imagem = {cavernas}
            key = {book.cod_livro}

            />
        </section>
    )
}

export default ListBook;