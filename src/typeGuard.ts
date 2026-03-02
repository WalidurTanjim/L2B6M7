// Type Guard using "typeof & in"
// Type Guard or Type Narrowing [Type Narrowing: Make smaller]

type AlphaNumeric = number | string;

const addFunc = (value1: AlphaNumeric, value2: AlphaNumeric) => {
     if(typeof value1 === "number" && typeof value2 === "number"){
          return value1 + value2;
     }else return value1.toString() + value2.toString();
};

// const addFunc1 = addFunc(1, 2);
// const addFunc2 = addFunc("1", 2);
// const addFunc3 = addFunc(1, "2");
// const addFunc4 = addFunc("1", "2");
// console.log(addFunc1, addFunc2, addFunc3, addFunc4);


// in guard
type NormalUser = {
     name: string;
};

type AdminUser = {
     name: string;
     role: "Admin" | "Moderator";
};

const getUserInfo = (user: NormalUser | AdminUser): string => {
     if("role" in user){
          return `${user?.name} is not a normal user. He/She is a ${user?.role}.`
     }else return `${user?.name} is just a normal user.`;
};

// const getUserInfo1 = getUserInfo({ name: "Walidur Tanjim" });
// const getUserInfo2 = getUserInfo({ name: "Walidur Rahman Tanjim", role: "Admin" });
// console.log(getUserInfo1, getUserInfo2);



// Type Guard with generics
const getUserInfoGenerics = <T extends NormalUser | AdminUser>(user: T): void => {
     if("role" in user){
          console.log(`${user?.name} is not a normal user. He/She is a ${user?.role}. [Gen]`);
     }else console.log(`${user?.name} is just a normal user. [Gen]`);
};

// getUserInfoGenerics({ name: "Walidur Tanjim" });
// getUserInfoGenerics({ name: "Walidur Rahman Tanjim", role: "Admin" });
