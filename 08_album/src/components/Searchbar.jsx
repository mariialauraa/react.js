// Componente de Pesquisa

const Searchbar = ({ setQuery, setCategoria, setActiveSearch }) => {

    const categorias = [
        "Natureza",
        "Pessoas", 
        "Tecnologia",
        "Animais",
        "Esportes"
    ]

  return (
    <div className="search-bar">
        <input type="text" placeholder="Pesquisar fotos..." onChange={(e) => setQuery(e.target.value)}/>
        <button onClick={() => setActiveSearch(true)}>
            Pesquisar
        </button>
        <select onChange={(e) => {
            setCategoria(e.target.value)
            setActiveSearch(true)
        }}>
            {categorias.map((categoria) => (
                <option key={categoria} value={categoria}>
                    {categoria}
                </option>
            ))}
        </select>
    </div>
  )
}

export default Searchbar