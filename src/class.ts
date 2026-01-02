// OOP: class => instance = object

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
    constructor(public name: string, public species: string, public sound: string) {};

    makeSound() {
        console.log(`${this.name} is making ${this.sound} sound.`);
    }
}

const cat = new Animal('Cat', 'Cat', 'Mew Mew');
const dog = new Animal('Dog', 'Dog', 'Ghew Ghew');
console.log(cat, dog);
cat.makeSound();
dog.makeSound();