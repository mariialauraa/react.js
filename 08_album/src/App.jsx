import FotoAmpliada from './components/FotoAmpliada'
import FotoList from './components/FotoList'
import Searchbar from './components/Searchbar'

import { useState, useEffect } from 'react'
import axios from 'axios'

function App() {

  const [query, setQuery] = useState("")
  const [categoria, setCategoria] = useState("")
  const [fotos, setFotos] = useState([])
  const [fotoAmpliada, setFotoAmpliada] = useState(null)
  const [activeSearch, setActiveSearch] = useState(false)

  const fetchData = async({query, categoria}) => {
    const apiKey = import.meta.env.VITE_UNSPLASH_API_KEY

    if(query || categoria) {
      let searchQuery = query

      if(query && categoria) {
        searchQuery = `${query} ${categoria}`
      } else if(categoria) {
        searchQuery = categoria
      }

      const response = await axios.get('https://api.unsplash.com/search/photos/', {
        params: {
          client_id: apiKey,
          query: searchQuery
        }
      })

      setFotos(response.data.results)
      return
    }

    const response = await axios.get('https://api.unsplash.com/photos/random', {
      params: {
        client_id: apiKey,
        count: 12 // recebe 12 fotos da API
      }
    })

    setFotos(response.data)

    console.log(response.data)
  }

  useEffect(() => {
    fetchData(query, categoria)
  }, [])

  useEffect(() => {
    if(activeSearch) {
      fetchData({ query, categoria })
      setActiveSearch(false)
    }
  }, [activeSearch])

  return (
    <div className='container'>
     <Searchbar setQuery={setQuery} setCategoria={setCategoria} setActiveSearch={setActiveSearch} />
     <FotoList fotos={fotos} setFotoAmpliada={setFotoAmpliada}/>
     {/* Verifica se tem foto ampliada */}
     {fotoAmpliada && (
      <FotoAmpliada foto={fotoAmpliada} setFotoAmpliada={setFotoAmpliada} />
     )}
    </div>
  )
}

export default App
