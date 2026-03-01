"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// Person class
class Person {
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
        console.log(`${this.name} study ${value} hours in a day.`);
    }
    ;
}
;
// Student class
class Student extends Person {
}
;
const student1 = new Student("Walidur Tanjim", 26, "Uttara, Dhaka");
// student1.getStudy(7);
// console.log(student1);
// Teacher class
class Teacher extends Person {
    designation;
    constructor(name, age, address, designation) {
        super(name, age, address);
        this.designation = designation;
    }
    ;
    takeClass(value) {
        console.log(`${this.name} takes class ${value} hours.`);
    }
    ;
}
;
const teacher1 = new Teacher("Walidur Tanjim", 26, "Uttara, Dhaka", "Senior Backend Developer");
teacher1.getStudy(7);
teacher1.takeClass(2.5);
console.log(teacher1);
