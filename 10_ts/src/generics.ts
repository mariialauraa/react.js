// Generics 
// É possível criar uma função com um tipo genérico
// f -> tipo G -> x, y

function getArray<T>(items: T[]): T[] {
    return new Array<T>().concat(items)
}

let numberArray = getArray([1, 2, 3, 4])
let stringArray = getArray(["Matheus", "Pedro", "João"])

console.log(numberArray, stringArray)

// Restringir tipos
function merge<T extends object, U extends object>(obj1: T, obj2: U) {
    return{...obj1, ...obj2}
}

const result = merge(
    {name: "Matheus", age: 25}, 
    {job: "Programador", isActive: true}
)

console.log(result)

// Utilitários de tipo
type ToDo = {
    title: string;
    description: string;
    completed: boolean;
}

function updateToDo(toDo: ToDo, fieldsToUpdate: Partial<ToDo>) {
    return {...toDo, ...fieldsToUpdate}
}

const myToDo: ToDo = {
    title: "Teste",
    description: "Alguma coisa",
    completed: false
}

const toDoAtualizado = updateToDo(myToDo, {completed: true})
console.log(toDoAtualizado)

// Somente leitura
const mySecondToDo: Readonly<ToDo> = {
    title: "Teste",
    description: "Alguma coisa",
    completed: false
}

// mySecondToDo.title = 'testando' 
// Não é possível atribuir a 'title' porque é uma propriedade de somente leitura.