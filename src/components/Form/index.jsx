import './styles.css'

export default function Form(){

    return(
        
        <section>
        <h2>Seção de Formulário</h2>
        <form>
            <div>
               <label>Nome:</label>
                <input type="text" id="nome" name="nome" placeholder="Nome Completo" required/>
            </div>


            <div>
                <label>Email:</label>
                <input type="email" name="email" id="email" placeholder="exemplo@exemplo.com" required/>
            </div>

            <div>
                <label>Senha:</label>
                <input type="password" name="senha" id="senha" placeholder="*******" required/>
            </div>

            <button type="submit">Salvar</button>
            <button type="reset">Limpar</button>
        </form>
     </section>
    
    )
}