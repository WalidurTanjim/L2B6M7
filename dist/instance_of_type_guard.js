"use strict";
// OOP: Instance of Type Guard or Type Narrowing
Object.defineProperty(exports, "__esModule", { value: true });
// Person class
class Person {
    name;
    // constructor
    constructor(name) {
        this.name = name;
    }
    ;
    // methods
    getSleep(value) {
        console.log(`${this.name} sleep ${value} hours each day.`);
    }
}
;
// Student class
class Student extends Person {
    constructor(name) {
        super(name);
    }
    // methods
    getStudy(value) {
        console.log(`${this.name} study ${value} hours each day.`);
    }
}
// Teacher class
class Teacher extends Person {
    constructor(name) {
        super(name);
    }
    // methods
    takeClass(value) {
        console.log(`${this.name} take class ${value} hours each day.`);
    }
}
// function guard: smart way
const isStudent = (user) => {
    return user instanceof Student;
};
const isTeacher = (user) => {
    return user instanceof Teacher;
};
// function: normal way
const getUserInfo = (user) => {
    if (user instanceof Student) {
        user.getStudy(8);
    }
    else if (user instanceof Teacher) {
        user.takeClass(3);
    }
    else
        user.getSleep(7);
};
const student1 = new Student("Walidur Tanjim");
const teacher1 = new Teacher("Mr. Teacher");
const person1 = new Person("Normal Person");
getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);
// =============================
// smart way with function guard
const getUserInfoWithFunctionGuard = (user) => {
    if (isStudent(user)) {
        user.getStudy(8);
    }
    else if (isTeacher(user)) {
        user.takeClass(3);
    }
    else
        user.getSleep(7);
};
const student2 = new Student("Walidur Tanjim");
const teacher2 = new Teacher("Mr. Teacher");
const person2 = new Person("Normal Person");
getUserInfoWithFunctionGuard(student2);
getUserInfoWithFunctionGuard(teacher2);
getUserInfoWithFunctionGuard(person2);
