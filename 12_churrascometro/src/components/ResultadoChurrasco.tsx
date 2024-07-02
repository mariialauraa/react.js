import { useLocation, useNavigate } from "react-router-dom"
import { Alimento, nomesAlimentos, quantidadePessoas } from "../types"
import styles from './ResultadoChurrasco.module.css'

type ResultadoChurrasco = {
  pessoas: number;
  alimentosSelecionados: Alimento[]
}

const ResultadoChurrasco = () => {
  const location = useLocation()
  const navigate = useNavigate()

  const state = location.state as ResultadoChurrasco

  const totalPorAlimento = state.alimentosSelecionados.reduce((acc, alimento) => {
    acc[alimento] = (quantidadePessoas[alimento] * state.pessoas) / 1000
    return acc
  }, {} as Record<Alimento, number> )
 
  const reiniciar = () => {
    navigate("/")
  }

  return (
    <div className={styles.container}>
      <h2 className={styles.title}>Resultado para {state.pessoas} pessoas:</h2>
      {state.alimentosSelecionados.map((alimento) => (
        <p className={styles.resultText} key={alimento}>{nomesAlimentos[alimento]}: {totalPorAlimento[alimento]}</p>
      ))}
      <button className={styles.resetButton} onClick={reiniciar}>Reiniciar</button>
    </div>
  )
}

export default ResultadoChurrasco