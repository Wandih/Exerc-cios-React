import './styles.css'

export default function List(){

    return(
        
        <section>
        <h2>Seção de Listas</h2>
        <div>
            <h3>Lista não ordenada</h3>
            <ul>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ul>
        </div>

        <div>
            <h3>Lista ordenada</h3>
            <ol>
                <li>Item 1</li>
                <li>Item 2</li>
                <li>Item 3</li>
            </ol>
        </div>
     </section>
    
    )
}