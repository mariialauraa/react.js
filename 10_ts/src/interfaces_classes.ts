// Definindo Interface: serve para mapear todos os campos
interface User {
    id: number;
    name: string;
    isActive: boolean;
}

// Utilizando a Interface
const myUser: User = {
    id: 1,
    name: "Maria",
    isActive: false
}
console.log(myUser)

// Classes: qdo uma classe implementa uma interface ela é obrigada a seguir todos os tipos
class Person implements User {
    id: number;
    name: string;
    isActive: boolean;

    constructor(id: number, name: string) {
        this.id = id
        this.name = name
    }
    greet(isNew: boolean) {
        console.log(`Olá meu nome é ${this.name}`)
        if(isNew) {
           console.log("E sou novo por aqui!") 
        }
    }
}
const person1 = new Person(2, "Matheus")
console.log(person1)
person1.greet(true)