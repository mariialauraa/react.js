import { useState, useEffect } from 'react'

const PerfilDeUsuario = ({ usuarioId }) => {
    const [usuario, setUsuario] = useState(null)

    useEffect(() => {

        // Função para buscar dados
        const buscarUsuario = async() => {
            // resposta assíncrona (precisa do await)
            const resposta = await fetch(`https://jsonplaceholder.typicode.com/users/${usuarioId}`)

            const dadosDoUsuario = await resposta.json()

            setUsuario(dadosDoUsuario)
        }
        // chama a função
        if (usuarioId) {
            buscarUsuario()
        }

    }, [usuarioId])

  return (
    <div>
        {/* renderização condicional */}
        {usuario ? (
            <div>
                <h1>{usuario.name}</h1>
                <p>{usuario.username}</p>
                <p>{usuario.email}</p>
            </div>
            ) : (
            <p>Carregando perfil...</p>
        )}
    </div>
  )
}

export default PerfilDeUsuario;