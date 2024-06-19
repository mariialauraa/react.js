import './App.css'
import ExUseEffect from './components/ExUseEffect'
import Timer from './components/Timer'
import ComponenteFilho from './components/ComponenteFilho'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'
import DisplayWindowSize from './components/DisplayWindowSize'

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
    {/* 2.3 useReducer */}
    {/* estudos mais complexos */}
    <Contador />
    {/* 2.4 Custom hook */}
    <DisplayWindowSize />
    {/* Slots e children props */}
    </>
  )
}

export default App
