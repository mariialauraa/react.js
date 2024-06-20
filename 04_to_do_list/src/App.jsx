import { useState, useEffect } from "react"
import TaskInput from "./components/TaskInput"
import TaskList from "./components/TaskList"

function App() {
  // manda para TaskList
  const [tasks, setTasks] = useState(
    JSON.parse(localStorage.getItem('tasks')) || []
  )

  useEffect(() => {
    // este efeito salva as tarefas no localStorage sempre que o estado 'tasks' muda
    localStorage.setItem('tasks', JSON.stringify(tasks))
  }, [tasks]);

  // novas tarefas adicionadas
  const addTask = (task) => {
    // id, text, done
    // add uma nova tarefa no array
    setTasks([...tasks, { id: Date.now(), text: task, done: false }])   
    localStorage.setItem("tasks", JSON.stringify(tasks))
  }

  // função para excluir tarefas
  const deleteTask = (taskId) => {
    setTasks(tasks.filter((task) => task.id !== taskId));
    // filtro onde pego a tarefa com ID que passei e removo da lista de tarefas
  }

  // função para tarefa concluída
  const toggleTaskDone = (taskId) => {
    setTasks(tasks.map((task) => 
      task.id === taskId ? {...task, done: !task.done} : task
    // checa se o ID é igual ao ID enviado, se for faz uma modificação
    // se não for não faz nada
    ))
  }
  
  return (
    <>
      <h1>Lista de Tarefas</h1>
      <TaskInput onAddTask={addTask} />
      <TaskList 
        tasks={tasks} 
        onDeleteTask={deleteTask}
        onToggleTaskDone={toggleTaskDone} 
      />
    </>
  )
}

export default App
