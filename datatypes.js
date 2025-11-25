//PRIMITIVE DATA TYPES

//Number
let a=20;
console.log(a);
console.log(typeof a);

//Undefined
let x;
console.log(x);
console.log(typeof x);

//String
let fullName="Roma Reddy";
console.log(fullName);
console.log(typeof fullName);


//Boolean
let istype=true;
console.log(istype);
console.log(typeof istype);


//Null
let s=null;
console.log(s);
console.log(typeof s);


//BigInt
let c=BigInt("63");
console.log(c);
console.log(typeof c);




//Symbol
let y=Symbol("Roma");
console.log(y);
console.log(typeof y);




//NON-PRIMITIVE DATA TYPES
const student={
    fullName:"Sai",
    age:23,
    gender:"Male"

};
console.log(student);
console.log(student["fullName"]);


r=5;
s='5';
console.log(typeof (5 + '5'));