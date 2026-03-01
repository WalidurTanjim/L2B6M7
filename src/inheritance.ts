// Person class
class Person {
     name: string;
     age: number;
     address: string;

     constructor(name: string, age: number, address: string){
          this.name = name;
          this.age = age;
          this.address = address;
     };

     getStudy(value: number): void {
          console.log(`${this.name} study ${value} hours in a day.`);
     };
};


// Student class
class Student extends Person {};
const student1 = new Student("Walidur Tanjim", 26, "Uttara, Dhaka");
// student1.getStudy(7);

// console.log(student1);


// Teacher class
class Teacher extends Person {
     designation: string;

     constructor(name: string, age: number, address: string, designation: string) {
          super(name, age, address);

          this.designation = designation;
     };

     takeClass(value: number): void {
          console.log(`${this.name} takes class ${value} hours.`);
     };
};

const teacher1 = new Teacher("Walidur Tanjim", 26, "Uttara, Dhaka", "Senior Backend Developer");
teacher1.getStudy(7);
teacher1.takeClass(2.5);

console.log(teacher1);
