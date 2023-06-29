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
import CadastroPost from './components/postagens/cadastroPost/CadastroPost'
import CadastroTema from './components/temas/cadastroTema/CadastroTema'
import DeletarPostagem from './components/postagens/deletarPostagem/DeletarPostagem'
import DeletarTema from './components/temas/deletarTema/DeletarTema'
import { Provider } from 'react-redux'
import store from './store/store'
import { ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


function App() {

  return (
    <Provider store={store}>
      <ToastContainer />
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
           <Route path="/formularioPostagem" element={<CadastroPost />} />

          <Route path="/formularioPostagem/:id" element={<CadastroPost />} />

          <Route path="/formularioTema" element={<CadastroTema />} />

          <Route path="/formularioTema/:id" element={<CadastroTema />} />

          <Route path="/deletarPostagem/:id" element={<DeletarPostagem />} />

          <Route path="/deletarTema/:id" element={<DeletarTema />} />
        </Routes>
      </div>
      <Footer />
    </BrowserRouter>
    </Provider>
  );
}

export default App;
