// Tipos básicos
let isActive: boolean
isActive = true

let total: number = 150;

let myName: string = "Maria"

console.log(typeof isActive, typeof total, typeof myName)

// Inferência de tipos
let isComplete = false
let amount = 200
let username = "Jhon"

console.log(typeof isComplete, typeof amount, typeof username)

let money
console.log(typeof money) // undefined
money = 200
console.log(typeof money) // number

// Arrays e Objetos
let numbers: number[] = [1, 2, 3]
console.log(typeof numbers) // object

let user: {name: string, age: number} = {
    name: "Maria",
    age: 32
}

// Tuples: cria um array com Quantidade Específica de múltiplos tipos de dados
let rgb: [number, number, number] = [255, 0, 0]
console.log(typeof rgb, rgb)

// Funções
function greet(nome: string): string {
    return `Olá, ${nome}`
}
console.log(greet("Maria"))

// Enum: trabalha com instruções específicas
enum Direction {
    Up,
    Down,
    Left,
    Right,
    Diagonal
}

function getDirectionMessage(direction: Direction): string {
    switch(direction) {
        case Direction.Up:
            return "Movendo para cima"
        case Direction.Down:
            return "Movendo para baixo"
        case Direction.Left:
            return "Movendo para esquerda"
        case Direction.Right:
            return "Movendo para direita"
        default:
            return "Ficou parado"
            
    }
}
console.log(getDirectionMessage(Direction.Up))
console.log(getDirectionMessage(Direction.Left))
console.log(getDirectionMessage(Direction.Right))
console.log(getDirectionMessage(Direction.Diagonal)) // cai no default