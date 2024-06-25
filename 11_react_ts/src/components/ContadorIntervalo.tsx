import { useState } from 'react'
import useInterval from '../hooks/useInterval'

// Exemplo de uso do useInterval
const ContadorIntervalo = () => {
    const [contador, setContador] = useState(0)

    useInterval(() => {
        setContador(contador + 1)
    }, 5000)

  return (
    <h1>{contador}</h1>
  )
}

export default ContadorIntervalo