import { useEffect, useState } from "react"
import axios from 'axios'

const PostForm = ({ post, onSuccess }) => {
  const [title, setTitle] = useState(post?.title || "")
  const [body, setBody] = useState(post?.body || "")

  // para receber os dados no input qdo for editar um post
  useEffect(() => {
    if (post) {
      setTitle(post.title);
      setBody(post.body);
    // limpa a edição quando clica em 'Cancelar edição'
    } else {
      setTitle('');
      setBody('');
    }
  }, [post]);

  const handleSubmit = async (e) => {
    e.preventDefault()
    const newPost = {title, body, userId: 1}

    try {
      if(post) {
        // atualiza post
        const response = await axios.put(
          `https://jsonplaceholder.typicode.com/posts/${post.id}`,
          newPost
        )
        onSuccess(response.data, "update") 
      // se não, apenas adiciona
      } else {
        const response = await axios.post(
          "https://jsonplaceholder.typicode.com/posts", newPost
        )
        // adicionar post na lista 
        onSuccess(response.data, "add") 
      }
      // limpa a edição
      setTitle("") 
      setBody("")

    } catch (error) {
      console.log("Erro ao enviar postagem", error)
    }
  }

  // funcao para deletar
  const handleDelete = async() => {
    try {
      await axios.delete(
        `https://jsonplaceholder.typicode.com/posts/${post.id}`
      );
      onSuccess(post, "delete");
      // limpa a edição
      setTitle("") 
      setBody("")

    } catch (error) {
      console.error("Erro ao deletar postagem:", error);
    }
  };

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
        />
      </div>
      <button type="submit">Enviar</button>
      {post && (
        <button type="button" onClick={handleDelete}>Excluir</button>
      )}
    </form>
  )
}

export default PostForm