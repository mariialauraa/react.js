// Traz itens para gente editar
import { useState, useEffect } from "react"
import axios from 'axios'
import PostForm from "./PostForm"

const PostManager = () => {
    const [posts, setPosts] = useState([]) 
    const [error, setError] = useState("") 

    // dados do post para edição
    const [selectedPost, setSelectedPost] = useState(null)
    const [isEditing, setIsEditing] = useState(false)

    // função para algum tipo de operação
    const handleSuccess = (post, operation) => {
        if (operation === "add") {
            setPosts((currentPosts) => [post, ...currentPosts]);
        } 
        else if (operation === "update") {
            setPosts((currentPosts) =>
              currentPosts.map(
                (currentPost) => (currentPost.id === post.id ? post : currentPost))
                // se for o msm ID atualiza, se não retorna o post atual
            );
        // operação para exclusão
        } else if (operation === "delete") {
            setPosts((currentPosts) => currentPosts.filter((currentPost) => currentPost.id !== post.id));
            // se o ID for diferente retorna o post, se igual exclui
            setSelectedPost(null) // retorna ao estado inicial
        }
        setIsEditing(false) // retorna ao estado inicial
    }

    useEffect(() => {
        const axiosPosts = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                )
                // pega os 5 primeiros itens
                setPosts(response.data.slice(0, 5))

            } catch (error) {
               setError(error.message) 
            }
        }
        // executa a função
        axiosPosts()
    }, [])

    // função para edição
    const handleEdit = (post) => {
        setSelectedPost(post)
        setIsEditing(true)
    }

    // retorna ao estado inicial do useState
    const handleCancelEdit = () => {
        setSelectedPost(null)
        setIsEditing(false)
    }

  return (
    <div>
        <h1>Gerenciar Posts</h1>
        <PostForm 
            post={isEditing ? selectedPost : null} 
            onSuccess={handleSuccess} 
        />
        {isEditing && <button onClick={handleCancelEdit}>Cancelar edição</button>}

        <h2>Postagens</h2>
        {error ? (<p>Erro: {error}</p>) :
            posts.map((post) => (
                <div key={post.id}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button onClick={() => handleEdit(post)}>Editar</button>
                </div>
            ))
        }
    </div>
  )
}

export default PostManager