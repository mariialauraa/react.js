function describeVehicle(vehicle) {
    console.log(`O veículo é da marca: ${vehicle.make}, seu modelo é: ${vehicle.model} e foi fabricado em ${vehicle.year}`);
}
// Exemplo de uso:
const myCar = {
    make: "Toyota",
    model: "Corolla",
    year: 2019,
};
describeVehicle(myCar);
// Exercício 2
// retorna UM elemento do array T
function firstElement(arr) {
    return arr[0];
}
// Exemplo de uso:
const newNumbers = [1, 2, 3];
console.log(firstElement(newNumbers));
const fruits = ["Banana", "Maça", "Laranja"];
console.log(firstElement(fruits));
function freezeProduct(product) {
    return Object.freeze(product);
}
const bread = {
    id: 2,
    name: "Pão",
    price: 1.99
};
const fronzenBread = freezeProduct(bread);
// fronzenBread.name = "Pão Doce"
// Não é possível atribuir a 'name' porque é uma propriedade de somente leitura.
function updateProductPrice(product, newPrice) {
    return Object.assign(Object.assign({}, product), newPrice);
}
const updatedBread = updateProductPrice(bread, { price: 3.49 });
console.log(updatedBread);
