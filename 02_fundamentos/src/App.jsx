import './App.css'
import Welcome from './components/Welcome'
import BomDia from './components/BomDia'
import MyComponent from './components/MyComponent'

function App() {
  return (
    <>
      {/* Criação de componente */}
      <Welcome />
      <MyComponent />
      {/* Expressões do JSX */}
      <BomDia />
    </>
  )
}

export default App
