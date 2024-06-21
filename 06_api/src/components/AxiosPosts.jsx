import { useState, useEffect } from "react"
import axios from 'axios'

const AxiosPosts = () => {
    const [posts, setPots] = useState([]) 
    const [error, setError] = useState("") 

    useEffect(() => {
        const axiosPosts = async () => {
            try {
                const response = await axios.get(
                    "https://jsonplaceholder.typicode.com/posts"
                )
                setPots(response.data)

            } catch (error) {
               setError(error.message) 
            }
        }
        // executa a função
        axiosPosts()
    }, [])

  return (
    <div>
        <h1>Post (Axios)</h1>
        {error ? (<p>Erro: {error}</p>) : 
            posts.map((post) => (
                <div key={post.id}>
                    <h2>{post.title}</h2>
                    <p>{post.body}</p>
                </div>
            ))
        }
    </div>
  )
}

export default AxiosPosts