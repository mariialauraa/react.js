// Generics 
// É possível criar uma função com um tipo genérico
// f -> tipo G -> x, y
function getArray(items) {
    return new Array().concat(items);
}
let numberArray = getArray([1, 2, 3, 4]);
let stringArray = getArray(["Matheus", "Pedro", "João"]);
console.log(numberArray, stringArray);
// Restringir tipos
function merge(obj1, obj2) {
    return Object.assign(Object.assign({}, obj1), obj2);
}
const result = merge({ name: "Matheus", age: 25 }, { job: "Programador", isActive: true });
console.log(result);
function updateToDo(toDo, fieldsToUpdate) {
    return Object.assign(Object.assign({}, toDo), fieldsToUpdate);
}
const myToDo = {
    title: "Teste",
    description: "Alguma coisa",
    completed: false
};
const toDoAtualizado = updateToDo(myToDo, { completed: true });
console.log(toDoAtualizado);
// Somente leitura
const mySecondToDo = {
    title: "Teste",
    description: "Alguma coisa",
    completed: false
};
// mySecondToDo.title = 'testando' 
// Não é possível atribuir a 'title' porque é uma propriedade de somente leitura.
