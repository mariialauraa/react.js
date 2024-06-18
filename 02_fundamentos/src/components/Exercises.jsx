import { useState } from 'react'

// Exercício 1: Componente de Saudação
const Greeting = ({ name }) => {
    return <h1>Olá, {name}!</h1>
}

// Exercício 2: Componente Contador
const Counter = () => {
    const [count, setCount] = useState(0)

    return (
        <div>
            <p>Você cliclou {count} vezes no botão.</p>
            <button onClick={() => setCount(count + 1)}>
                Exercicio 2
            </button>
            <button onClick={() => setCount(count - 1)}>
                Decrementar
            </button>
        </div>
    )
}

// Exercício 3: Lista de Tarefas
const TaskList = ({ tasks }) => {
    if (tasks.length === 0) {
        return <p>Não há tarefas para mostrar.</p>
    }

    return (
        <ul>
            {tasks.map((task) => (
               <li key={task.id}>{task.text}</li> 
            ))}
        </ul>
    )
}

// esse componente aceita componentes filhos
const Exercises = () => {
    // Dados de exemplo para o componente TaskList
    const tasks = [
        { id: 1, text: "Comprar leite"},
        { id: 2, text: "Estudar React"}
    ]

  return (
    <div>
        <h2>Exercício 1</h2>
        {/* Componente filho - não precisa importar */}
        <Greeting name="João"/> 
        <h2>Exercício 2</h2>
        <Counter />
        <h2>Exercício 3</h2>
        <TaskList tasks={[]}/>
        <TaskList tasks={tasks}/>
    </div>
  )
}

export default Exercises