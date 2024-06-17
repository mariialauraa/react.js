import FilhoFunction from "./FilhoFunction"

const PaiFunction = () => {
    const handleChildClick = () => {
        console.log('Clicou no botão do elemento filho')
    }

  return (
    <div>
        <FilhoFunction onChildClick={handleChildClick} />
    </div>
  )
}

export default PaiFunction