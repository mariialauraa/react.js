import { useState, useEffect } from "react";

// função que vai ser executada no componente
// já cria exportando

export default function useWindowSize() {
    // useState com objeto:
    const [windowSize, setWindowSize] = useState({
        width: window.innerWidth,
        height: window.innerHeight
    })

    // monitorar as mudanças:
    useEffect(() => {

        // Função que altera os valores do windowSize toda vez que a janela for redimensionada
        function handleResize() {
            setWindowSize({
                width: window.innerWidth,
                height: window.innerHeight
            })
        }  
        
        // Evento que dispara a função
        window.addEventListener('resize', handleResize)

        // executa uma vez
        handleResize()

        // Limpeza de memória
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    // retorna o que vai ser usado nos componentes
    return windowSize;
}