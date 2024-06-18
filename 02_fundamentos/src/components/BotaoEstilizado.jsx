const BotaoEstilizado = () => {

    const estiloDoBotao = {
        backgroundColor: "#333",
        color: "#FFF",
        padding: "15px 32px",
        cursor: "pointer"
    }

  return (
    // <button style={{ padding: '20px' }}>Clique em mim!</button>

    <button style={estiloDoBotao}>Clique em mim</button>
  )
}

export default BotaoEstilizado