import { Link, Outlet } from "react-router-dom"

const Dashboard = () => {
  return (
    <div>
        <h2>Dashboard</h2>
        <nav>
            <ul>
                <li>
                    <Link to="profile">Perfil</Link>
                </li>
                <li>
                    <Link to="settings">Configurações</Link>
                </li>
            </ul>
        </nav> 
        {/* Outlet - onde as rotas aninhadas estão no componente pai */}
        <div>
            <Outlet />
        </div>       
    </div>
  )
}

export default Dashboard