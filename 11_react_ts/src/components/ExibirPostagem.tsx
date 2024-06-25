import {useEffect, useState } from 'react'
import axios from 'axios'

import { Post } from '../types/post'

// Componente funcional para exibir postagens
const ExibirPostagem = () => {
    const [posts, setPosts] = useState<Post[]>([])
    const [carregando, setCarregando] = useState(true)

    // Monitora a exibição do componente
    useEffect(() => {
        const buscarPostagens = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                )

                setPosts(response.data.slice(0, 5)); // pegar os 5 primeiros

            } catch (error) {
                console.log(error)

            } finally {
                setCarregando(false)
            }
        }

        buscarPostagens()
    }, [])

  return (
    <div>
        <h2>Lista de postagens</h2>
        {carregando ? (<p>Carregando posts...</p>) : (
            <ol>
                {posts.map((post) => (
                    <li key={post.id}>
                        <h3>{post.title}</h3>
                        <p>{post.body}</p>
                    </li>
                ))}
            </ol>
        )}
    </div>
  )
}

export default ExibirPostagem