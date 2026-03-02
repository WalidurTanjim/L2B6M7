"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
// OOP: static
class CounterWithoutStatic {
    // without static
    count = 0;
    // constructor(count: number = 0){
    //      this.count = count;
    // }
    // methods: without static
    increment() {
        return this.count = this.count + 1;
    }
    ;
    decrement() {
        return this.count = this.count - 1;
    }
    ;
}
const withoutStatic1 = new CounterWithoutStatic();
console.log(withoutStatic1);
console.log(withoutStatic1.increment());
console.log(withoutStatic1.increment());
console.log(withoutStatic1.decrement());
// CountWithStatic class
class CountWithStatic {
    count = 0;
    // constructor(count: number = 0){
    //      this.count = count;
    // };
    increment() {
        return this.count = this.count + 1;
    }
    ;
    decrement() {
        return this.count = this.count - 1;
    }
    ;
}
;
const countWithStatic1 = new CountWithStatic();
console.log(countWithStatic1);
console.log(countWithStatic1.increment());
console.log(countWithStatic1.increment());
console.log(countWithStatic1.decrement());
