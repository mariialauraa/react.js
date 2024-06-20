import { useState, useEffect } from "react"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

function App() {
  // manda para TaskList
  const [tasks, setTasks] = useState([])

  // novas tarefas adicionadas
  const addTask = (task) => {

    // id, text, done

    // add uma nova tarefa no array
    setTasks([...tasks, {
      id: Date.now(),
      text: task,
      done: false
    }])   
    
    // localStorage
  }

  // excluir tarefas
  const deleteTask = (taskId) => {
    // filtro onde pego a tarefa com ID que passei e removo da lista de tarefas
    setTasks(tasks.filter((task) => task.id !== taskId))
  }
  
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList tasks={tasks} onDeleteTask={deleteTask}/>
    </>
  )
}

export default App
