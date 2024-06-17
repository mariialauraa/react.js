import Filho from "./Filho";

function Pai() {
    return (
      <div>
        <Filho />
        <Filho />
      </div>  
    )
    // Quando retorna algo que tem mais de uma linha utiliza return()
}

export default Pai;