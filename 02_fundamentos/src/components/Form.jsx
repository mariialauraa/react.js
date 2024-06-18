import { useState } from 'react'

const Form = () => {
    const [value, setValue] = useState("")

    // função para o evento de envio
    const handleSubmit = (event) => {
        event.preventDefault()
        console.log("Formulário enviado:", value)
    }

  return (
    // conecta a função ao formularia
    <form onSubmit={handleSubmit}>
        <input 
            type="text" 
            value={value}  
            onChange={(e) => setValue(e.target.value)}
            placeholder='Preencha o campo' 
        />
        <button type='submit'>Enviar</button>
    </form>
  )
}

export default Form