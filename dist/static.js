"use strict";
// Static
Object.defineProperty(exports, "__esModule", { value: true });
class Counter {
    static count = 0;
    // methods: without static
    // countIncrement() {
    //     return Counter.count = Counter.count + 1;
    // };
    // countDecrement() {
    //     return Counter.count = Counter.count - 1;
    // }
    // methods: with static
    static countIncrement() {
        return Counter.count = Counter.count + 1;
    }
    ;
    static countDecrement() {
        return Counter.count = Counter.count - 1;
    }
}
// instance: without static method
// const instance1 = new Counter();
// console.log(instance1.countIncrement());
// console.log(instance1.countIncrement());
// const instance2 = new Counter();
// console.log(instance2.countDecrement());
// const instance3 = new Counter();
// console.log(instance3.countIncrement());
// console.log(instance3.countIncrement());
// instance: with static method
console.log(Counter.countIncrement());
console.log(Counter.countIncrement());
console.log(Counter.countIncrement());
console.log(Counter.countDecrement());
