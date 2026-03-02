// OOP: instance of type guard / type narrowing

class Person {
     name: string;

     constructor(name: string){
          this.name = name;
     };

     getSleep(numOfSleep: number = 5): void {
          console.log(`${this?.name} sleep ${numOfSleep} hours in a day.`);
     };
};


// Student class
class Student extends Person {
     constructor(name: string){
          super(name);
     };

     doStudy(numOfHours: number = 2): void {
          console.log(`${this?.name} study ${numOfHours} hours in a day.`);
     };
};


// Teacher class
class Teacher extends Person {
     designation: string;

     constructor(name: string, designation: string){
          super(name);

          this.designation = designation;
     };

     takeClass(numOfHours: number = 1): void {
          console.log(`${this?.name} takes class ${numOfHours} in a day.`);
     };
};

const person1 = new Person("Walidur Tanjim");
const student1 = new Student("Student Walid");
const teacher1 = new Teacher("Teacher Walid", "Senior Backend Developer");

const getUserInfo = (user: Person) => {
     if(user instanceof Student){
          user.doStudy(8);
     }else if(user instanceof Teacher){
          user?.takeClass(3);
     }else user?.getSleep(7);
};

getUserInfo(person1);
getUserInfo(student1);
getUserInfo(teacher1);
