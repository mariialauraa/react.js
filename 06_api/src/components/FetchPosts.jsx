import { useState, useEffect } from "react"

const FetchPosts = () => {
    const [posts, setPots] = useState([]) // salvar dados
    const [error, setError] = useState("") // disparar requisição

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(
                    "https://jsonplaceholder.typicode.com/posts"
                )
                console.log(response)

                // transformar em dados
                const data = await response.json()
                setPots(data)

            } catch (error) {
               setError(error.message) 
            }
        }
        // executa a função
        fetchPosts()
    }, [])

  return (
    <div>
        <h1>Post (Fetch API)</h1>
        {error ? (<p>Erro: {error}</p>) : 
            posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <h2>{post.body}</h2>
                </div>
            ))
        }
    </div>
  )
}

export default FetchPosts