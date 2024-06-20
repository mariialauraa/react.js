import './App.css'

import { Routes, Route, Link, NavLink } from 'react-router-dom'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import Login from './pages/Login'
import Dashboard from './pages/Dashboard'
import Profile from './pages/Profile'
import Settings from './pages/Settings'
import TaskDetails from './components/TaskDetails'
import NotFound from './components/NotFound'

function App() {

  return (
    <>
      {/* 1 - Setup e configuração inicial */}
      <nav>
        <ul>
          <li><Link to="/">Início</Link></li>
          <li><Link to="/about">Sobre</Link></li>
          <li><Link to="/contact">Contato</Link></li>
          {/* 2 - NavLink */}
          <li>
            <NavLink className={({isActive}) => (isActive ? 'active-link' : '')} to="/contact">
              Contato
            </NavLink>
          </li>
          {/* 3 - useNavigate */}
          <li>
            <Link to="/login">Login</Link>
          </li>
          {/* 4 - Rotas aninhadas */}
          <li>
            <Link to="/dashboard">Dashboard</Link>
          </li>
        </ul>
        {/* 5 - Rotas dinâmicas */}
        <div>
          <h2>Tarefas</h2>
          <Link to="/tasks/1">Tarefa 1</Link>
          <Link to="/tasks/2">Tarefa 2</Link>
          <Link to="/tasks/3">Tarefa 3</Link>
        </div>
        {/* 6 - Rota 404 */}
        <div>
          <h2>Itens</h2>
          <Link to="items/1">Item 1</Link>
        </div>
      </nav>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        {/* 3 - useNavigate */}
        <Route path="/login" element={<Login />} />
        {/* 4 - Rotas aninhadas para o Dashboard */}
        <Route path="/dashboard/" element={<Dashboard />}>
          <Route path="profile" element={<Profile />} />
          <Route path="settings" element={<Settings />} />
        </Route>
        {/* 5 - Rotas dinâmicas */}
        <Route path="tasks/:taskId" element={<TaskDetails />} />
        {/* 6 - Rota 404 */}
        <Route path="*" element={<NotFound />} />
        {/* Qualquer coisa que não está em Routes cai em '*' */}
      </Routes>
      <p>Rodapé</p>
    </>
  )
}

export default App
