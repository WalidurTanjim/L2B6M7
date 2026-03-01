class Animal {
     name: string;
     species: string;
     sound: string;

     constructor(name: string, species: string, sound: string){
          this.name = name;
          this.species = species;
          this.sound = sound;
     };

     makeSound(){
          console.log(`${this.name} makes sound ${this.sound}`);
     };
};

const dogResult = new Animal("Dogish bhai", "Dog", "Ghew ghew");
const catResult = new Animal("Cat bhai", "Cat", "Mew mew");

console.log(dogResult);
console.log(catResult);