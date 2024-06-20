// Adiciona a Tarefa
import { useState } from "react"

const TaskInput = ({ onAddTask }) => {

    const [input, setInput] = useState("")

    const handleSubmit = (e) => {
        e.preventDefault()

        // checa se tem texto
        if (input.trim()) {
            onAddTask(input) // add a tarefa
            setInput("") // limpa o input
        }
    }

  return (
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={input} 
            onChange={(e) => setInput(e.target.value)} 
            placeholder="Adicione uma nova tarefa" 
        />
        <button type="submit">Adicionar</button>
    </form>
  )
}

export default TaskInput