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

const withoutStatic1 = new CounterWithoutStatic();
console.log(withoutStatic1);
console.log(withoutStatic1.increment());
console.log(withoutStatic1.increment());
console.log(withoutStatic1.decrement());





// CountWithStatic class
class CountWithStatic {
     count: number = 0;

     // constructor(count: number = 0){
     //      this.count = count;
     // };

     increment(): number {
          return this.count = this.count + 1;
     };

     decrement(): number {
          return this.count = this.count - 1;
     };
};

const countWithStatic1 = new CountWithStatic();
console.log(countWithStatic1);
console.log(countWithStatic1.increment());
console.log(countWithStatic1.increment());
console.log(countWithStatic1.decrement());