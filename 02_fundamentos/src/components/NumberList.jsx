const NumberList = ({ numbers }) => {
    // estruturas de loop - for, while
    // c/ react - metodos de array

    // chaves - key: um identificador unico para cada elemento

  return (
    <ul>
        {numbers.map((number, index) => (
            <li key={index}>{number}</li>
        ))}
    </ul>
  )
}

export default NumberList