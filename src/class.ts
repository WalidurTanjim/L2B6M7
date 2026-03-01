class Animal {
     name: string;
     species: string;
     sound: string;

     constructor(name: string, species: string, sound: string){
          this.name = name;
          this.species = species;
          this.sound = sound;
     };

     makeSound(): void {
          console.log(`${this.name} makes sound ${this.sound}`);
     };

     awakTime(time: number): void {
          console.log(`${this.name} awak ${time} am in the morning`);
     };
};

const dogResult = new Animal("Dogish bhai", "Dog", "Ghew ghew");
const catResult = new Animal("Cat bhai", "Cat", "Mew mew");
dogResult.makeSound();
catResult.makeSound();

dogResult.awakTime(7);
catResult.awakTime(5);

// console.log(dogResult);
// console.log(catResult);