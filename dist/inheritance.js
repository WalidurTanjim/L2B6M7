"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Parent class
class Parent {
    name;
    age;
    address;
    constructor(name, age, address) {
        this.name = name;
        this.age = age;
        this.address = address;
    }
    ;
    getStudy(value) {
        console.log(`${this.name} study ${value} hours`);
    }
}
// Student class
class Student extends Parent {
}
// Teacher class
class Teacher extends Parent {
    designation;
    constructor(name, age, address, designation) {
        super(name, age, address); // parent class er constructor k call dey. that means 'name, age, address' k parent constructor k diye dey
        this.designation = designation;
    }
    takeClass(value) {
        console.log(`${this.name} take class ${value} hours`);
    }
}
const student1 = new Student("Walidur Tanjim", 25, "Mirpur, Dhaka");
console.log(student1);
student1.getStudy(5);
const teacher1 = new Teacher("Walidur Rahman", 25, "Mirpur, Dhaka", "Senior Teacher");
console.log(teacher1);
teacher1.takeClass(3);
