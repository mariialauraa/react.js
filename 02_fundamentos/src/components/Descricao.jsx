// Arrow function dentro de uma const (rafce)
const Descricao = (props) => {

    // props = {}
    // propriedades -> chave dos valores
    // props.nome = "Maria Laura"
  return (
    <div>
        <p>Seu nome é: {props.nome}</p>
        <p>E você tem: {props.idade} anos de idade.</p>
    </div>
  )
}

export default Descricao;