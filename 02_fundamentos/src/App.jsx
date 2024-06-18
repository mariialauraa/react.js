import './App.css'
import Welcome from './components/Welcome'
import BomDia from './components/BomDia'
import MyComponent from './components/MyComponent'
import Pai from './components/Pai'
import Descricao from './components/Descricao'
import Cachorro from './components/Cachorro'
import Counter from './components/Counter'
import UserInfoForm from './components/UserInfoForm'
import Button from './components/Button'
import PaiFunction from './components/PaiFunction'
import Form from './components/Form'
import RenderCondicional from './components/RenderCondicional'
import LoginButton from './components/LoginButton'
import Warning from './components/Warning'
import NumberList from './components/NumberList'
import BotaoEstilizado from './components/BotaoEstilizado'
import BotaoAzul from './components/BotaoAzul'
import Exercises from './components/Exercises'

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
      {/* 1.8 Eventos */}
      <Button />
      {/* 1.9 Passando funções de manipulação de eventos com props */}
      <PaiFunction />
      {/* 1.10 Eventos de form */}
      <Form />
      {/* 1.11 Renderização condicional com Props */}
      <RenderCondicional user="Maria Laura" />
      {/* 1.12 Expressão ternária */}
      <LoginButton loggedIn={false} />
      <LoginButton loggedIn={true} />
      {/* 1.13 Render nulo */}
      <Warning warning={null}/>
      <Warning warning="Temos um warning"/>
      {/* 1.14 Listas Chaves */}
      <NumberList numbers={[1, 2, 3, 4, 5]}/>
      {/* 1.15 Estilos por atributo */}
      <BotaoEstilizado />
      {/* 1.16 Estilos globais */}
      <BotaoAzul />
      {/* 1.17 Exercícios */}
      <Exercises />
    </>
  )
}

export default App
