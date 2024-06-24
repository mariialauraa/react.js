// Componente principal 
import { useState } from "react"
import Board from "./Board"

const shuffleArray = (array) => {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        
        // reordenação
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
};

const generateCards = () => {
    const values = ["A", "B", "C", "D", "E", "F", "G", "H"]

    const cards = values.map((value) => ({
        value,
        isFlipped: false
    }))

    const duplicatedCards = cards
        .concat([...cards])
        .map((card, index) => ({...card, id: index}))

    // retornar os dados embaralhados
    return(shuffleArray(duplicatedCards))
}
generateCards()

const Game = () => {
    const [cards, setCards] = useState(generateCards())
    const [flippedCards, setFlippedCards] = useState([])
    const [chances, setChances] = useState(10)

    const result = cards.filter((card) => card.isFlipped).length

    const handleCardClick = (clickedCard) => {
        if(chances === 0) return;
        if(flippedCards.length === 2) return;

        // identifica qual carta foi clicada
        const newCards = cards.map((card) => {
            return card.id === clickedCard.id ? {...card, isFlipped: true} : card
        })

        setCards(newCards)
        // cartas já viradas + carta clicada
        setFlippedCards([...flippedCards, clickedCard])

        // checa se tem já uma carta virada
        if(flippedCards.length === 1) {
            setTimeout(() => {
               const [firstCard] = flippedCards

               if(firstCard.value !== clickedCard.value) {
                    const resetCards = cards.map((card) => {
                        return card.id === firstCard.id || 
                        card.id === clickedCard.id ? 
                        {...card, isFlipped: false} : card
                    })
                    setCards(resetCards)
                    setChances((prev) => prev - 1)
                }
                setFlippedCards([])
            }, 1000)
        }
    }

    const resetGame = () => {
        setChances(10)
        setFlippedCards([])
        setCards(generateCards())
    }

  return (
    <div className="game">
        <Board cards={cards} onCardClick={handleCardClick} />
        {chances === 0 ? (
            <p>Suas tentativas acabaram</p>
        ) : result === cards.length ? (
            <h2>Parabéns, você ganhou!</h2>
        ) : (
            <p>Você possui {chances} tentativas(s)</p>
        )}
        <button className="btn" onClick={resetGame}>
            Reniciar o jogo
        </button>
    </div>
  )
}

export default Game