import { useState } from "react"
import axios from 'axios'

const PostForm = ({ onSuccess }) => {
  const [title, setTitle] = useState("")
  const [body, setBody] = useState("")

  const handleSubmit = async (e) => {
    e.preventDefault()

    const newPost = {title, body, userId: 1}

    try {
      const response = await axios.post("https://jsonplaceholder.typicode.com/posts", newPost)

      // adicionar post na lista 
      onSuccess(response.data, "add")     

    } catch (error) {
      console.log("Erro ao enviar postagem", error)
    }
  }

  return (
    <form onSubmit={handleSubmit}>
      <div>
      <input 
        type="text" 
        value={title} 
        placeholder="Digite o título" 
        onChange={(e) => setTitle(e.target.value)}
      />
      </div>
      <div>
      <textarea 
        value={body} 
        placeholder="Digite o conteúdo" 
        onChange={(e) => setBody(e.target.value)}
      ></textarea>
      </div>
      <button type="submit">Enviar</button>
    </form>
  )
}

export default PostForm