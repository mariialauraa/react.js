import './App.css'
import ExUseEffect from './components/ExUseEffect'
import Timer from './components/Timer'
import ComponenteFilho from './components/ComponenteFilho'
import { MeuContextoProvider } from './contexts/MeuContexto'
import ValorDoContexto from './components/ValorDoContexto'
import Contador from './components/Contador'
import DisplayWindowSize from './components/DisplayWindowSize'
import Container from './components/Container'
import PerfilDeUsuario from './components/PerfilDeUsuario'
import CalculoPesado from './components/CalculoPesado'
import ContadorCallback from './components/ContadorCallback'


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

    {/* 2.5 Slots e children props */}
    <Container>
      <h1>Título da seção</h1>
      <p>Este é o meu subtítulo</p>
      <Contador />
    </Container>

    {/* 2.6 Sicronizar o estado com props */}
    {/* prop => componente => chamada API => resulta em um dado */}
    <PerfilDeUsuario usuarioId={1}/>
    <PerfilDeUsuario usuarioId={2}/>

    {/* 2.7 Hooks que ajudam na performance da aplicação */}
    {/* useMemo*/}
    <CalculoPesado numero={5}/>
    {/* Caso não mude o valor do 'numero' o React salva o valor na memória e não recria a função 'CalculoPesado' */}

    {/* useCallback */}
    <ContadorCallback />
    </>
  )
}

export default App
