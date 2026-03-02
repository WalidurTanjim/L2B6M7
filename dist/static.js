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
// const withoutStatic1 = new CounterWithoutStatic();
// const withoutStatic2 = new CounterWithoutStatic();
// console.log(withoutStatic1);
// console.log(withoutStatic1.increment());
// console.log(withoutStatic1.increment());
// console.log(withoutStatic1.decrement());
// console.log(withoutStatic2);
// console.log(withoutStatic2.increment());
// console.log(withoutStatic2.increment());
// CountWithStatic class
class CountWithStatic {
    static count = 0;
    // constructor(count: number = 0){
    //      this.count = count;
    // };
    static increment() {
        return CountWithStatic.count = CountWithStatic.count + 1;
    }
    ;
    static decrement() {
        return CountWithStatic.count = CountWithStatic.count - 1;
    }
    ;
}
;
// console.log(CountWithStatic.increment());
// console.log(CountWithStatic.decrement());
// console.log(CountWithStatic.increment());
// console.log(CountWithStatic.increment());
// console.log(CountWithStatic.decrement());
// console.log(CountWithStatic.increment());
// console.log(CountWithStatic.increment());
// console.log(CountWithStatic.decrement());
// console.log(CountWithStatic.decrement());
// console.log(CountWithStatic.increment());
