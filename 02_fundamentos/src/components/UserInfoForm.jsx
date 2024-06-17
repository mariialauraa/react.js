import { useState } from 'react'

const UserInfoForm = () => {
    const [name, setName] = useState("")
    const [email, setEmail] = useState("")

    // Envio de formulário
    const handleSubmit = (event) => {
        // para o formulário não ser disparado
        event.preventDefault()

        // acessar a API via fetch ou axios
        console.log(name, email)
    }

  return (
    // evento que dispara ao enviar o formulário
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            placeholder="Digite o seu nome" 
        />
        <input 
            type="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            placeholder="Digite o seu e-mail" 
        />

        <button type="submit">Enviar</button>
    </form>
  )
}

export default UserInfoForm