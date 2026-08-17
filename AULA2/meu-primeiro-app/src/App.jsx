import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import heroImg from './assets/hero.png'
import './App.css'

function App() {

  return (
    <>
          <div class="login">
        <img src="../public/logo.png" alt="LogoIfrj"/>
        <div class="info">
            <p>Agora o acesso é feito com o seu <strong>CPF</strong> + <strong>senha</strong></p>
        </div>
        <div class="usuario">
            <input type="text" placeholder="CPF (só numeros)"/>
            <input type="password" placeholder="Senha"/>
            <button type="submit">Confirmar</button>
        </div>
        <div class="inferior">
            <a href="">Esqueci a Senha</a>
            <a href="">Esqueci o E-mail Cadastrado</a>
            <a href="">Sou responsável - Primeiro acesso</a>
        </div>
    </div>
    </>
  )
}

export default App
