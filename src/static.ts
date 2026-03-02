// OOP: static
class CounterWithoutStatic {
     // without static
     count: number = 0;

     // constructor(count: number = 0){
     //      this.count = count;
     // }

     // methods: without static
     increment(): number {
          return this.count = this.count + 1;
     };

     decrement(): number {
          return this.count = this.count - 1;
     };
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
     static count: number = 0;

     // constructor(count: number = 0){
     //      this.count = count;
     // };

     static increment(): number {
          return CountWithStatic.count = CountWithStatic.count + 1;
     };

     static decrement(): number {
          return CountWithStatic.count = CountWithStatic.count - 1;
     };
};

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