import {useNavigate,useLocation} from "react-router-dom";
import{useEffect} from "react";


function Header () {
    const navigate = useNavigate()
    const location = useLocation()
    const userCPF = location.state?.userCPF
    const userSenha = location.state?.userSenha

     const handleLogout = () => {
        navigate('/')
    }
    return(   
         <header className="Topo">
                <img src="" alt ="Logo"></img>
                <img src="" alt="Usuário"></img>
                <label></label>
                <nav>
                    <ul>
                        <li>Configurações</li>
                        <li><button onClick={handleLogout}>Sair / Voltar ao Login</button></li>
                    </ul>
                </nav>
         </header>
         )
}
export default Header