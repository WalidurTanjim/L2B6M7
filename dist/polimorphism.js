"use strict";
/*
    OOP has 4 pilars:
    1: Inheritance
    2: Polimorphism
    3: Abstruction
    4: Encapsulation
*/
Object.defineProperty(exports, "__esModule", { value: true });
// Polimorphism
class Person {
    getSleep() {
        console.log(`I have been sleeping for 8 hours`);
    }
}
class Student extends Person {
    getSleep() {
        console.log(`I am a student. I am to study at least 8 hours everyday.`);
    }
}
class NextLevelDeveloper extends Person {
    getSleep() {
        console.log(`I am a Programmer. I am to sleep 6 hours each day.`);
    }
}
const getSleepingHours = (param) => {
    param.getSleep();
};
// instance
const person1 = new Person();
const person2 = new Student();
const person3 = new NextLevelDeveloper();
getSleepingHours(person1);
getSleepingHours(person2);
getSleepingHours(person3);
class Shape {
    getArea() {
        return 0;
    }
}
class Circle extends Shape {
}
