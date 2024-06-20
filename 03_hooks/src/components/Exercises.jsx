import { useEffect, useMemo, useState } from 'react'

// Solução do Exercício 1: Uso de useEffect para Sincronização de Dados
const UserInfo = ({ userDados }) => {

    useEffect(() => {
        document.title = `${userDados.name} - ${userDados.jobTitle}`
    }, [userDados])

    return (
        <div>
            <h1>Name: {userDados.name}</h1>
            <p>Profissao: {userDados.jobTitle}</p>

        </div>
    )
}

// Solução do Exercício 2: Memorizando Cálculos com useMemo

const fibonnaci = (n) => {
    if (n <= 1) {
        return n
    }

    return fibonnaci(n - 1) + fibonnaci(n - 2)
}

const FibCalculator = ({ num }) => {

    const fibResult = useMemo(() => fibonnaci(num), [num])

    return (
        <div>
            <p> Fibonacci de {num} é {fibResult}</p>
        </div>
    )

}

// Solução do Exercício 3: Criação e Uso de um Custom Hook
// Custom Hook:
const useOnlineStatus = () => {
    const [isOnline, setIsOnline] = useState(navigator.onLine)

    useEffect(() => {
        const handleOnline = () => setIsOnline(true)
        const handleOffline = () => setIsOnline(false)

        window.addEventListener("online", handleOnline)
        window.addEventListener("offline", handleOffline)

        // Limpeza de memória
        return () => {
            window.removeEventListener("online", handleOnline)
            window.removeEventListener("offline", handleOffline)
        }        
    }, [])

    return isOnline
}

// Componente para usar o hook
const OnlineStatusIndicator = () => {
    const userOnline = useOnlineStatus() // executa o Custom Hook

    return (
        <div>
            <p>Você está atualmente: {userOnline ? "Online" : "Offline"}</p>
        </div>
    )
}

// Componente que engloba todas as soluções de exercícios
const Exercises = () => {

    // Mock de props para o UserInfo
    const userInfo = {
        name: "Alice",
        jobTitle: "Desenvolvedora"
    }

  return (
    <div>
        <h2>Exercicio 1</h2>
        <UserInfo userDados={userInfo}/>

        <h2>Exercicio 2</h2>
        <FibCalculator num={10}/>

        <h2>Exercicio 2</h2>
        <OnlineStatusIndicator />
    </div>
  )
}

export default Exercises