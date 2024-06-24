const Card = ({ card, onClick }) => {
  return (
    // imprime os valores das cartas (A-H)
    <div className={`card ${card.isFlipped ? "flipped" : ""}`} onClick={() => onClick(card)}>
        {card.isFlipped ? card.value : "?"}
    </div>
  )
}

export default Card