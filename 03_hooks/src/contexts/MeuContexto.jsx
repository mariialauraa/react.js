import { useState, createContext } from "react";

// onde vai estar contido o valor do meu contexto
// é possível acessar de qualquer lugar
export const MeuContexto = createContext()

// vai mostrar quais componentes podem usufruir desse state
export const MeuContextoProvider = ({ children }) => {
    const [mensagem, setMensagem] = useState("Mensagem inicial")

    // o que vai ser entregue para os componentes que consomem esse contexto
    const valorDoContexto = {
        mensagem,
        setMensagem
    }

    return (
        // quem estiver dentro do Provider, vai poder acessar e modificar a mensagem
        <MeuContexto.Provider value={valorDoContexto}>
            {children}
        </MeuContexto.Provider>
    )
}