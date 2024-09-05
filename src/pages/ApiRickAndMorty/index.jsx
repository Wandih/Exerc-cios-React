import { useEffect, useState } from 'react'
import './styles.css'
import Card from '../../components/Card'

export default function ApiRickAndMorty(){
    const [conteudo, setConteudo] = useState(<>Carregando...</>)


    async function carregarTodosOsPersonagens(){
        const reqOptions = {
            method: "GET", // outros métodos - POST, PUT, DELETE
            redirect: "follow",
            
        }

        const reponse = await fetch(
            "https://rickandmortyapi.com/api/character/",
            reqOptions
        )

        
        if(!reponse.ok){
            throw new Error("Deu Ruim")
        }

        const reponseApi = await reponse.json()
      
        return reponseApi
    }
    
     async function listaPersonagens (){
        const { results }= await carregarTodosOsPersonagens ()

        
        return results.map(
            personagem => <Card data={personagem} key={personagem.id} />
               
        )

        
    }
    
    useEffect(() => {
        async function getConteudo(){
            setConteudo(await listaPersonagens())
        }

        getConteudo()
    }, [])
    
    return (
        <div className='lista-principal'>
            {conteudo}
        </div>
    )
}
