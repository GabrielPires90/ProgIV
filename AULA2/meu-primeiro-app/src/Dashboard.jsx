import { useNavigate } from 'react-router-dom'
import './App.jsx'

function Dashboard () {
    const navigate =useNavigate()

    const handleLogout = () => {
        navigate('/')
    }
    return (
        <div>
            <h1>Painel Principal{Dashboard}</h1>
            <button onClick={handleLogout}>Sair / Voltar ao Login</button>
        </div>
    )
}
export default Dashboard