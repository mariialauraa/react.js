import './App.css'
import BarraFerramentas from './components/BarraFerramentas'
import Contador from './components/Contador'
import ContadorIntervalo from './components/ContadorIntervalo'
import Counter from './components/Counter'
import Exercicios from './components/Exercicios'
import ExibirPostagem from './components/ExibirPostagem'
import Greeting from './components/Greeting'
import TextInput from './components/TextInput'
import { TemaProvider } from './contexts/TemaContext'

function App() {

  return (
    <>
      <h1>React com TS</h1>
      {/* 1 - Componente funcional com TS */}
      <Greeting name="Maria" />
      {/* 2 - Hooks com tipos */}
      <Counter />
      {/* 3 - Manipulação de eventos com tipo */}
      <TextInput />
      {/* 4 - Custom hooks com TS */}
      <ContadorIntervalo />
      {/* 5 - Exercícios */}
      <Exercicios />
      {/* 6 - useReducer com TS */}
      <Contador />
      {/* 7 - Context API com TS */}
      <TemaProvider>
        <BarraFerramentas />
      </TemaProvider>
      {/* 8 - Requisição de APIs com Axios e TS */}
      <ExibirPostagem />
    </>
  )
}

export default App