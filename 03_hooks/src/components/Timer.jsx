import { useState, useEffect } from 'react'

const Timer = () => {
    const [segundos, setSegundos] = useState(0)

    // setInterval, setTimeout
    // se eu uso essas funções fora do useEffect, eu não tenho a possibilidade de parar elas qdo o componente não for mais válido
    useEffect(() => {
        // função que roda a cada 01 segundo
        const intervalId = setInterval(() => {
            setSegundos((prevSegundos) => prevSegundos + 1)
        }, 1000)

        // limpeza de estado (sempre q tiver uma operação contínua)
        return () => clearInterval(intervalId)
    }, []) // array de dependencias vazio, é executado apenas qdo o componente abre, depois não mais.

  return (
    <div>Timer: {segundos} segundos.</div>
  )
}

export default Timer