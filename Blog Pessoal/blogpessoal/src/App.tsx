import React from 'react'
import Navbar from './components/estaticos/navbar/Navbar'
import Footer from './components/estaticos/footer/Footer'
import Home from './pages/home/home'
import Login from './pages/login/Login'
import CadastroUsuario from './pages/cadastroUsuario/CadastroUsuario'
import './App.css'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import ListaTema from './components/temas/listatema/ListaTema'
import ListaPostagem from './components/postagens/listapostagem/ListaPostagem'

function App() {

  return (
    <BrowserRouter>
   {/* Tudo que precisa ser renderizado na tela que vai direcionar para algum lugar fica aqui */}
      <Navbar />
      <div style={{minHeight: '100vh'}}>
        <Routes> // Antigo Switch
           <Route path="/" element={<Login />} />
          <Route path="/login" element={<Login />} />
          <Route path="/home" element={<Home />} />
           <Route path="/cadastro" element={<CadastroUsuario />} />
           <Route path="/temas" element={<ListaTema />} />
           <Route path="/posts" element={<ListaPostagem />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
