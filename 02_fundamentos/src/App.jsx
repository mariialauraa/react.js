import './App.css'
import Welcome from './components/Welcome'
import BomDia from './components/BomDia'
import MyComponent from './components/MyComponent'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import UserInfoForm from './components/UserInfoForm'

function App() {
  return (
    <>
      {/* 1.1 Criação de componente */}
      <Welcome />
      <MyComponent />
      {/* 1.2 Expressões do JSX */}
      <BomDia />
      {/* 1.3 Componente dentro de componente */}
      <Pai />
      {/* 1.4 Props */}
      <Descricao nome="Bob" idade={30}/>
      {/* 1.5 Desestruturação de Props */}
      <Cachorro nome="Biscoito" raca="SRD" />
      {/* 1.6 useState -> hook */}
      <Counter />
      {/* 1.7 Múltiplos estados */}
      <UserInfoForm />
    </>
  )
}

export default App
