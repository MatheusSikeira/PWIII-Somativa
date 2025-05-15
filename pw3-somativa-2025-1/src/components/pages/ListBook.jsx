import React, {useState, useEffect} from "react";
import style from "./listBook.module.css";
import BookCards from "../BookCards";
import cavernas from "../../assets/cavernas_aco.jpg";
import ContainerBook from "../layout/ContainerBook";

const ListBook = () => {
    
    const [livros, setLivros] = useState([]);
    
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
            setLivros(data.data)
        }).catch((error)=>{
            console.log(error)
        })
    },[]);

    return(

        <section>
            <ContainerBook>

                {livros.map((data)=>(
                    <BookCards cod_livro={data.cod_livro} imagem={cavernas} nome_livro={data.nome_livro} autor_livro={data.autor_livro} key={data.cod_livro}/>
                ))}
            
            </ContainerBook>
        </section>
    )
}

export default ListBook;