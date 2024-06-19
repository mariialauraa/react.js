// componente para usar o hook useWindowSize.js

import useWindowSize from "../hooks/useWindowSize"

const DisplayWindowSize = () => {
    // extrai a width e height do hook
    const {width, height} = useWindowSize()

  return (
    <div>
        <p>A largura da janela é: {width}</p>
        <p>A altura da janela é: {height}</p>
    </div>
  )
}

export default DisplayWindowSize