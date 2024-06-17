const Button = () => {
    const handleClick = () => {
        console.log("Clicou!")
    }

  return (
    // Qdo eu preciso de um argumento, coloco função anônima
    // <button onClick={() => handleClick(5)}>Clique em mim</button>
    <button onClick={handleClick}>Clique em mim</button>
  )
}

export default Button