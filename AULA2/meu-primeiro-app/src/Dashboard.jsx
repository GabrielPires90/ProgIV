import { useNavigate , useLocation } from 'react-router-dom';
import { useEffect } from "react";
import './App.jsx';
import Header from "./Header"

function Dashboard () {
    const navigate =useNavigate()
    const location = useLocation();
    const userCPF = location.state?.userCPF
    const userSenha = location.state?.userSenha

    useEffect(() => {
        if (!userCPF){
                navigate('/')
        }
    }, [userCPF, navigate])
    


    const handleLogout = () => {
        navigate('/')
    }
    return (
        <>
        <div className="corpo">
            <Header/>
            <main>
                <h1>Painel Principal(Dashboard)</h1>
                <h2>Seja Bem-Vindo {userCPF}, sua Senha: {userSenha}</h2>
            </main>
            <footer>

            </footer>
        </div>
     </>
    )
}
export default Dashboard