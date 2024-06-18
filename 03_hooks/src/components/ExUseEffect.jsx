import { useEffect, useState } from 'react'

const ExUseEffect = () => {
    const [contador, setContador] = useState(0)

    // executar algo, baseado em algo
    // a mudança de um valor, carregamento da página

    useEffect(() => {
        document.title = `Você clicou ${contador} vezes`
        // title é o título da barra de navegação
    },)

  return (
    <div>
        <p>Você clicou {contador} vezes</p>
        <button onClick={() => setContador(contador + 1)}>
            Clique aqui
        </button>
    </div>
  )
}

export default ExUseEffect