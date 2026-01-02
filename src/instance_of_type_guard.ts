// OOP: Instance of Type Guard or Type Narrowing

// Person class
class Person {
    name: string;

    // constructor
    constructor(name: string){
        this.name = name;
    };

    // methods
    getSleep(value: number): void {
        console.log(`${this.name} sleep ${value} hours each day.`);
    }
};


// Student class
class Student extends Person {
    constructor(name: string){
        super(name);
    }

    // methods
    getStudy(value: number): void {
        console.log(`${this.name} study ${value} hours each day.`);
    }
}


// Teacher class
class Teacher extends Person {
    constructor(name: string){
        super(name);
    }

    // methods
    takeClass(value: number): void {
        console.log(`${this.name} take class ${value} hours each day.`);
    }
}


// function guard: smart way
const isStudent = (user: Person) => {
    return user instanceof Student;
};
const isTeacher = (user: Person) => {
    return user instanceof Teacher;
}


// function: normal way
const getUserInfo = (user: Person) => {
    if(user instanceof Student){
        user.getStudy(8);
    }else if(user instanceof Teacher){
        user.takeClass(3);
    }else user.getSleep(7);
}

const student1 = new Student("Walidur Tanjim");
const teacher1 = new Teacher("Mr. Teacher");
const person1 = new Person("Normal Person");

getUserInfo(student1);
getUserInfo(teacher1);
getUserInfo(person1);


// =============================


// smart way with function guard
const getUserInfoWithFunctionGuard = (user: Person) => {
    if(isStudent(user)){
        user.getStudy(8);
    }else if(isTeacher(user)){
        user.takeClass(3);
    }else user.getSleep(7);
}

const student2 = new Student("Walidur Tanjim");
const teacher2 = new Teacher("Mr. Teacher");
const person2 = new Person("Normal Person");

getUserInfoWithFunctionGuard(student1);
getUserInfoWithFunctionGuard(teacher1);
getUserInfoWithFunctionGuard(person1);