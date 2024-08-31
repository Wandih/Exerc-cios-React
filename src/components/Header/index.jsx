import { Link } from 'react-router-dom'
import './styles.css'

export default function Header (){
    return (
        
        <header id="cabecalho">
            <h1>Minha página HTML</h1>
            <nav>
                <ul id='uli'>
                    <li id='lista'>
                        <Link to='./'>Home</Link>
                    </li>
                    <li id='lista'>
                        <Link to='./about'>About</Link>
                    </li>
                    <li id='lista'>
                        <Link to='./login'>Login</Link>
                    </li>
                    <li id='lista'>
                        <Link to='./cadastro'>Cadastro</Link>
                    </li>
                </ul>
            </nav>
        </header>
    
    )
}