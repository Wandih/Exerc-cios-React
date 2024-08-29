import './styles.css'

export default function Video(){

    return(
        
        <section>
        <h2>Seção de Imagem e Vídeo</h2>
        <img width="560" height="315" src="./baixados.jpg"/>
        <iframe width="560" height="315" src="https://www.youtube.com/embed/1ROfSD0eU5E?si=FUaXhTQEDSFm6fky" title="YouTube video player" frameBorder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerPolicy="strict-origin-when-cross-origin" allowfullscreen></iframe>
     </section>
    
    )
}