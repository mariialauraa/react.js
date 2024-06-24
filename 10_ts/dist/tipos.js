// Tipos básicos
let isActive;
isActive = true;
let total = 150;
let myName = "Maria";
console.log(typeof isActive, typeof total, typeof myName);
// Inferência de tipos
let isComplete = false;
let amount = 200;
let username = "Jhon";
console.log(typeof isComplete, typeof amount, typeof username);
let money;
console.log(typeof money); // undefined
money = 200;
console.log(typeof money); // number
// Arrays e Objetos
let numbers = [1, 2, 3];
console.log(typeof numbers); // object
let user = {
    name: "Maria",
    age: 32
};
// Tuples: cria um array com Quantidade Específica de múltiplos tipos de dados
let rgb = [255, 0, 0];
console.log(typeof rgb, rgb);
// Funções
function greet(nome) {
    return `Olá, ${nome}`;
}
console.log(greet("Maria"));
// Enum: trabalha com instruções específicas
var Direction;
(function (Direction) {
    Direction[Direction["Up"] = 0] = "Up";
    Direction[Direction["Down"] = 1] = "Down";
    Direction[Direction["Left"] = 2] = "Left";
    Direction[Direction["Right"] = 3] = "Right";
    Direction[Direction["Diagonal"] = 4] = "Diagonal";
})(Direction || (Direction = {}));
function getDirectionMessage(direction) {
    switch (direction) {
        case Direction.Up:
            return "Movendo para cima";
        case Direction.Down:
            return "Movendo para baixo";
        case Direction.Left:
            return "Movendo para esquerda";
        case Direction.Right:
            return "Movendo para direita";
        default:
            return "Ficou parado";
    }
}
console.log(getDirectionMessage(Direction.Up));
console.log(getDirectionMessage(Direction.Left));
console.log(getDirectionMessage(Direction.Right));
console.log(getDirectionMessage(Direction.Diagonal)); // cai no default
