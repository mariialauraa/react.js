// Sintaxe de desestruturação
const Cachorro = ({nome, raca}) => {
    //props.nome => nome
    //destructuring => obj {} e array []
  
    return (
        <div>
            <p>
                O cachorro se chama {nome} e é da raça {raca}.
            </p>
        </div>
    )
}

export default Cachorro