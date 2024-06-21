import './App.css'

import { Routes, Route, Link } from 'react-router-dom'
import FetchPosts from './components/FetchPosts'
import AxiosPosts from './components/AxiosPosts'
import PostManager from './components/PostManager'
import PostLoader from './components/PostLoader'

function App() {

  return (
    <>
    {/* 1 - GET com Fetch e Axios */}
    <h1>GET com Fetch e Axios</h1>
    <div>
      <Link to="/fetch-posts">Fetch Posts</Link>
      <Link to="/axios-posts">Axios Posts</Link>
    </div>
    {/* 2 - Requisições POST e UPDATE/PUT */}
    <div>
      <Link to="/posts">Gerenciar Posts</Link>
    </div>
    {/* 3 - Tratamentos de erros */}
    <div>
      <Link to="/post/1">Carregar Post 1</Link>
    </div>
    <div>
      <Link to="/post/999">Carregar Post 999</Link>
    </div>
    <Routes>
      {/* 1 - GET com Fetch e Axios */}
      <Route path="/fetch-posts" element={<FetchPosts />} />
      <Route path="/axios-posts" element={<AxiosPosts />} />
      {/* 2 - Requisições POST e UPDATE/PUT */}
      <Route path="/posts" element={<PostManager />} />
      {/* 3 - Tratamentos de erros */}
      <Route path="/post/:postId" element={<PostLoader />} />
    </Routes>
    </>
  )
}

export default App
