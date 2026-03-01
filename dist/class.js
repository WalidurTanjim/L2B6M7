"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        console.log(`${this.name} makes sound ${this.sound}`);
    }
    ;
    awakTime(time) {
        console.log(`${this.name} awak ${time} am in the morning`);
    }
    ;
}
;
const dogResult = new Animal("Dogish bhai", "Dog", "Ghew ghew");
const catResult = new Animal("Cat bhai", "Cat", "Mew mew");
dogResult.makeSound();
catResult.makeSound();
dogResult.awakTime(7);
catResult.awakTime(5);
// console.log(dogResult);
// console.log(catResult);
