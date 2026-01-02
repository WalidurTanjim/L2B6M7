// // Type Guard or Type Narrowing
// // Narrowing: make smaller

// // in typeof
// type Alphaneumeric = number | string;

// const add = (num1: Alphaneumeric, num2: Alphaneumeric) => {
//     if(typeof num1 === "number" && typeof num2 === "number"){
//         return num1 + num2;
//     }else return num1.toString()+num2.toString();
// }

// const add1 = add(2, 2);
// const add2 = add(2, "2");
// const add3 = add("2", 2);
// const add4 = add("2", "2");




// // in guard
// type NormalUser = {
//     name: string;
// }

// type AdminUser = {
//     name: string;
//     role: 'Admin' | "Mod";
// }


// const getUserInfo = (user: NormalUser | AdminUser) => {
//     if('role' in user){
//         console.log(`${user?.name} and his/her role is: ${user?.role}`);
//     }else console.log(`${user?.name} is just a normal user.`);

// }

// getUserInfo({ name: "Normal" });
// getUserInfo({ name: "Admin user", role: "Admin" });



// ==================================================================











// Type Guard or Type Narrowing
// Type Narrowing: make smaller

// in typeof
type AlphaNeumeric = number | string;

const add = (value1: AlphaNeumeric, vlaue2: AlphaNeumeric) => {
    if(typeof value1 === "number" && typeof vlaue2 === "number"){
        return value1 + vlaue2;
    }else return value1.toString()+vlaue2.toString();
}

const add1 = add(2, 3);
const add2 = add("2", 3);
const add3 = add(2, "3");
const add4 = add("2", "3");




// in guard
type NormalUser = {
    name: string;
}

type AdminUser = {
    name: string;
    role: "Admin" | "Mod";
}

const getUserInfo = (user: NormalUser | AdminUser): void => {
    if("role" in user){
        console.log(`${user.name} is a ${user.role}`);
    }else console.log(`${user.name} is just a normal user`);
}

getUserInfo({ name: "Walidur Tanjim" });
getUserInfo({ name: "Walidur Rahman Tanjim", role: "Admin" });


// This is not important. It's just only practice purpose (Type Narrowing with Generics)
const getUserInfoGenerics = <T extends NormalUser | AdminUser>(user: T): void => {
    if("role" in user){
        console.log(`${user.name} is a ${user.role}`);
    }else console.log(`${user.name} is just a normal user`);
}
getUserInfoGenerics<NormalUser>({ name: "Walidur Tanjim" });
getUserInfoGenerics<AdminUser>({ name: "Walidur Tanjim", role: "Admin" });