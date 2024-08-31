import './styles.css'

export default function Cadastro(){
    return(
        
        <form id='container'>
            <h2 id='cas'>Cadastrar</h2>
            
            <div id='child'>
            <span>E-mail</span><br/>
            <input type="email" name="email" id="email" placeholder="exemplo@gmail.com" required></input><br/>
            </div>

            <div id='child'> 
            <span>Senha</span><br/>
            <input type="password" name="senha" id="senha" placeholder="*******" required></input><br/>
            </div>

            <button  id='button' type='submit'>Cadastrar</button>
            <button  id='button' type='reset'>Limpar</button>

        </form>

    
        
    )
}
