//   singleton

// objects literals

const JsUser={
    name : "hardik",
    age:19,
    Location:"PATAN",
    email:"hardik123@gmail.com",
    islogIn:false,
    lastlogInDays:["monday","saturday"]
}
// console.log(JsUser.email);
// console.log(JsUser.email,JsUser.name,JsUser.lastlogInDays)
// console.log(JsUser["email"]);                                 <========================= objects ne display karva ni 2 method chhe ============

// JsUser.email="hardikchatgpt123@gmail.com";
// console.log(JsUser.email);                          <================== objects ni value change karva mate====================================



// JsUser.email="hardikmicrosoft123@gmail.com";
// Object.freeze(JsUser);
// JsUser.email="hardikfacebook@gmail.com";   <================ object.freeze() method no use data ne safe rakhva mtlb change na thay ae mate thay 6
// console.log(JsUser.email);


// JsUser.greeting=function(){
//     console.log("hello js users")
// }
// console.log(JsUser.greeting());  /



// JsUser.greetingtwo=function(){
//         console.log(`hello js users, ${this.name}`);
// }
// console.log(JsUser.greetingtwo());

