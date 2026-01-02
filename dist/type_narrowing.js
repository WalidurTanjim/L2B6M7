"use strict";
// // Type Guard or Type Narrowing
// // Narrowing: make smaller
Object.defineProperty(exports, "__esModule", { value: true });
const add = (value1, vlaue2) => {
    if (typeof value1 === "number" && typeof vlaue2 === "number") {
        return value1 + vlaue2;
    }
    else
        return value1.toString() + vlaue2.toString();
};
const add1 = add(2, 3);
const add2 = add("2", 3);
const add3 = add(2, "3");
const add4 = add("2", "3");
const getUserInfo = (user) => {
    if ("role" in user) {
        console.log(`${user.name} is a ${user.role}`);
    }
    else
        console.log(`${user.name} is just a normal user`);
};
getUserInfo({ name: "Walidur Tanjim" });
getUserInfo({ name: "Walidur Rahman Tanjim", role: "Admin" });
