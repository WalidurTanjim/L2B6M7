"use strict";
// OOP: instance of type guard / type narrowing
Object.defineProperty(exports, "__esModule", { value: true });
class Person {
    name;
    constructor(name) {
        this.name = name;
    }
    ;
    getSleep(numOfSleep = 5) {
        console.log(`${this?.name} sleep ${numOfSleep} hours in a day.`);
    }
    ;
}
;
// Student class
class Student extends Person {
    constructor(name) {
        super(name);
    }
    ;
    doStudy(numOfHours = 2) {
        console.log(`${this?.name} study ${numOfHours} hours in a day.`);
    }
    ;
}
;
// Teacher class
class Teacher extends Person {
    designation;
    constructor(name, designation) {
        super(name);
        this.designation = designation;
    }
    ;
    takeClass(numOfHours = 1) {
        console.log(`${this?.name} takes class ${numOfHours} in a day.`);
    }
    ;
}
;
const person1 = new Person("Walidur Tanjim");
const student1 = new Student("Student Walid");
const teacher1 = new Teacher("Teacher Walid", "Senior Backend Developer");
const getUserInfo = (user) => {
    if (user instanceof Student) {
        user.doStudy(8);
    }
    else if (user instanceof Teacher) {
        user?.takeClass(3);
    }
    else
        user?.getSleep(7);
};
getUserInfo(person1);
getUserInfo(student1);
getUserInfo(teacher1);
