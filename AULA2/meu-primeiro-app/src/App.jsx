import { useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './App.css'

function App() {
  const [cpf,setCpf] = useState('')
  const [senha,setSenha] = useState('')
  const navigate = useNavigate()


  const handleLogin = (event) => {
    event.preventDefault()
    if (!cpf || !senha) {
      alert ("Por favor,preencha todos os campos!")
      return
    }
    console.log("Dados enviados:",{cpf,senha})
    navigate('/dashboard', {state:{userCPF:cpf,userSenha:senha}})
  }


  return (
    <><form className="login" onSubmit={handleLogin}>
        <div class="login">
        <img src="../public/logo.png" alt="LogoIfrj"/>
        <div classname="info">
            <p>Agora o acesso é feito com o seu <strong>CPF</strong> + <strong>senha</strong></p>
        </div>
        <div class="usuario">
            <input type="number" placeholder="CPF (só numeros)" value={cpf} onChange={(e) => setCpf(e.target.value)}/>
            <input type="password" placeholder="Senha" value={senha} onChange={(e) => setSenha(e.target.value)}/>
            <button type="submit">Confirmar</button>
        </div>
        <div class="inferior">
            <a href="">Esqueci a Senha</a>
            <a href="">Esqueci o E-mail Cadastrado</a>
            <a href="">Sou responsável - Primeiro acesso</a>
        </div>
      </div>
    </form>
          
    </>
  )
}

export default App
