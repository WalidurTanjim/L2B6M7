"use strict";
// Type Guard using "typeof & in"
// Type Guard or Type Narrowing [Type Narrowing: Make smaller]
Object.defineProperty(exports, "__esModule", { value: true });
const addFunc = (value1, value2) => {
    if (typeof value1 === "number" && typeof value2 === "number") {
        return value1 + value2;
    }
    else
        return value1.toString() + value2.toString();
};
const getUserInfo = (user) => {
    if ("role" in user) {
        return `${user?.name} is not a normal user. He/She is a ${user?.role}.`;
    }
    else
        return `${user?.name} is just a normal user.`;
};
// const getUserInfo1 = getUserInfo({ name: "Walidur Tanjim" });
// const getUserInfo2 = getUserInfo({ name: "Walidur Rahman Tanjim", role: "Admin" });
// console.log(getUserInfo1, getUserInfo2);
// Type Guard with generics
const getUserInfoGenerics = (user) => {
    if ("role" in user) {
        console.log(`${user?.name} is not a normal user. He/She is a ${user?.role}. [Gen]`);
    }
    else
        console.log(`${user?.name} is just a normal user. [Gen]`);
};
// getUserInfoGenerics({ name: "Walidur Tanjim" });
// getUserInfoGenerics({ name: "Walidur Rahman Tanjim", role: "Admin" });
