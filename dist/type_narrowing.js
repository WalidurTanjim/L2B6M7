"use strict";
// Type Guard or Type Narrowing
// Narrowing: make smaller
Object.defineProperty(exports, "__esModule", { value: true });
const add = (num1, num2) => {
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else
        return num1.toString() + num2.toString();
};
const add1 = add(2, 2);
const add2 = add(2, "2");
const add3 = add("2", 2);
const add4 = add("2", "2");
const getUserInfo = (user) => {
    if ('role' in user) {
        console.log(`${user?.name} and his/her role is: ${user?.role}`);
    }
    else
        console.log(`${user?.name} is just a normal user.`);
};
getUserInfo({ name: "Normal" });
getUserInfo({ name: "Admin user", role: "Admin" });
