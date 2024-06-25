import { useContext } from 'react'
import { TemaContext } from '../contexts/TemaContext'

const BarraFerramentas = () => {
    const contextoTema = useContext(TemaContext)

    if(!contextoTema) {
        return null
    }

  return (
    <div 
        style={{
            background: contextoTema.tema === "claro" ? "#FFF" : "#000", 
            color: contextoTema.tema === "claro" ? "#000" : "#FFF"
        }}
    >
       <button onClick={contextoTema.alternarTema}>Alterar tema</button> 
    </div>
  )
}

export default BarraFerramentas