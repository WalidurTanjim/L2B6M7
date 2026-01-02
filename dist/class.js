"use strict";
// OOP: class => instance = object
Object.defineProperty(exports, "__esModule", { value: true });
// class Animal {
//     name: string;
//     species: string;
//     sound: string;
//     constructor(name: string, species: string, sound: string){
//         this.name = name;
//         this.species = species;
//         this.sound = sound;
//     };
//     makeSound(){
//         console.log(`${this.name} making sound ${this.sound}`);
//     }
// }
// const dog = new Animal('Bob', 'Dog', 'Gheu gheu');
// console.log(dog.name);
// const cat = new Animal('Cat', 'Cat', 'Mew Mew');
// console.log(cat.sound);
// cat.makeSound();
// Parameter properties
class Animal {
    name;
    species;
    sound;
    constructor(name, species, sound) {
        this.name = name;
        this.species = species;
        this.sound = sound;
    }
    ;
    makeSound() {
        console.log(`${this.name} making sound ${this.sound}`);
    }
}
const cat = new Animal("Cat", "Cat", "Mew Mew");
const dog = new Animal("Dog", "Dog", "Gheu Gheu");
cat.makeSound();
dog.makeSound();
console.log(cat.name);
