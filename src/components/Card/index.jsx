import './styles.css'

export default function Card({ data: personagem }){
    return(
    <div className='card char'>
    <img src={personagem.image} alt={personagem.name}/>
    <h2>{personagem.name}</h2>

    <div className='char-info'>
        <span><b>Espécie:</b> {personagem.species}</span>
        <span><b>Espécie:</b> {personagem.gender}</span>
    </div>

    <h5><b>Status: </b> {personagem.status}</h5>
</div>
)}