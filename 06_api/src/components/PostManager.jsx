// Traz itens para gente editar
import { useState, useEffect } from "react"
import axios from 'axios'
import PostForm from "./PostForm"

const PostManager = () => {
    const [posts, setPots] = useState([]) 
    const [error, setError] = useState("") 

    // função para algum tipo de operação
    const handleSuccess = (post, operation) => {
        if(operation === "add") {
            setPots((currentPosts) => [post, ...currentPosts])
        }
    }

    useEffect(() => {
        const axiosPosts = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                )
                // pega os 5 primeiros itens
                setPots(response.data.slice(0, 5))

            } catch (error) {
               setError(error.message) 
            }
        }
        // executa a função
        axiosPosts()
    }, [])

  return (
    <div>
        <h1>Gerenciar Posts</h1>
        <PostForm onSuccess={handleSuccess} />
        <h2>Postagens</h2>
        {error ? (<p>Erro: {error}</p>) :
        posts.map((post) => (
            <div key={post.id}>
                <h2>{post.title}</h2>
                <p>{post.body}</p>
                <button>Editar</button>
            </div>
        ))}
    </div>
  )
}

export default PostManager