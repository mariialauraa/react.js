// Utilizando a Interface
const myUser = {
    id: 1,
    name: "Maria",
    isActive: false
};
console.log(myUser);
// Classes: qdo uma classe implementa uma interface ela é obrigada a seguir todos os tipos
class Person {
    constructor(id, name) {
        this.id = id;
        this.name = name;
    }
    greet(isNew) {
        console.log(`Olá meu nome é ${this.name}`);
        if (isNew) {
            console.log("E sou novo por aqui!");
        }
    }
}
const person1 = new Person(2, "Matheus");
console.log(person1);
person1.greet(true);
