//  primitive

//  7 types : String,Number,Boolean,Null,undefined,Symbol,BigInt

// const score = 100;
// let name = "Hardik"
// const scorevalue = 100.30;
// const  isLoggIn = false;
// const outsidetemp = null;
// let userEmail;
//  const id = symbol('123');
// const otherId = symbol('123');


// console.log(isLoggIn);
// console.log(outsidetemp);
// console.assertlog(userEmail);
// console.log(id);
// console.log(typeof score);



 //  Reference (non-Primitive)

// Array , Objects , Functions 


// const heros =["shaktiman","ironman","spiderman"]
// let myobj={
//     name: "hardik",
//     age : 19,


// }
// console.log(myobj.name);

// const myfunction = function()
// {
//     console.log("hello world");

// }
// console.log(typeof myfunction);


// ++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++++

//  Stack(primitive),Heap(non-primitive)         //  Memory ki kahani in javascript

// let myYoutubename = "hardikpanchaldotcom";
// let anothername=myYoutubename;
// anothername= "chaiaurcode";

// console.log(myYoutubename);

// console.log(anothername);

let user={
     email:"user@google.com",
     upi:"user@ybl"
}

let usertwo=user
usertwo.email="hardikpanchal@gmail.com";
console.log(user.email);
console.log(usertwo.email);


