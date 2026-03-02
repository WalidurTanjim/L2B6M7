// Polimorphism: 2nd piller of OOP

// Shape class
class Shape {
     getArea(): number {
          return 0;
     }
}

// Circle class
class Circle extends Shape {
     radius: number;

     constructor(radius: number){
          super();

          this.radius = radius;
     };

     getArea(): number {
          return Math.PI * this.radius * this.radius;
     }
};

// Rectangle class
class Rectangle extends Shape {
     width: number;
     height: number;

     constructor(width: number, height: number) {
          super();

          this.width = width;
          this.height = height;
     };

     getArea(): number {
          return this.width * this.height;
     }
};

// getArea function
const getArea = (params: Shape): number => {
     return params.getArea();
};

// instance
const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);

// console.log(getArea(shape3));
