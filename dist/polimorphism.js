"use strict";
// Polimorphism: 2nd piller of OOP
Object.defineProperty(exports, "__esModule", { value: true });
// Shape class
class Shape {
    getArea() {
        return 0;
    }
}
// Circle class
class Circle extends Shape {
    radius;
    constructor(radius) {
        super();
        this.radius = radius;
    }
    ;
    getArea() {
        return Math.PI * this.radius * this.radius;
    }
}
;
// Rectangle class
class Rectangle extends Shape {
    width;
    height;
    constructor(width, height) {
        super();
        this.width = width;
        this.height = height;
    }
    ;
    getArea() {
        return this.width * this.height;
    }
}
;
// getArea function
const getArea = (params) => {
    return params.getArea();
};
// instance
const shape1 = new Shape();
const shape2 = new Circle(10);
const shape3 = new Rectangle(10, 20);
// console.log(getArea(shape3));
