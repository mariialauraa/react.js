import './App.css'
import ExUseEffect from './components/ExUseEffect'
import Timer from './components/Timer'
import ComponenteFilho from './components/ComponenteFilho'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ValorDoContexto from './components/ValorDoContexto'

function App() {
  return (
    <>
    {/* 2.1 useEffect */}
    <ExUseEffect />
    <Timer />
    {/* 2.2 useContext */}
    {/* aplicações de pequeno e médio porte, que precisam transferir o estado entre componentes */}
    <MeuContextoProvider>
      {/* componentes que tem acesso ao contexto */}
      <ComponenteFilho /> 
      <ValorDoContexto />
    </MeuContextoProvider>
    </>
  )
}

export default App
