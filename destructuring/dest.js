//Array Destructuring

let array =[3,4,5,3,6,5,8,7];
let [arr1,arr2,arr3,arr4,...e]=array;
console.log(e);

//object Destructuring

let studentInfo ={
    id:12,
    fullName :'saiful Islam',
    age:23,
    language :{
        native:"Bangla",
        Basic :'English'
    }
};
let {id,fullName,age,language}=studentInfo;
console.log(`His name is ${fullName} And Language is ${language.native}`);

//function destructuring

const simpleFunction =({id,age})=>{
    console.log(id,age)
}

let student ={
    id:12,
    fullName :'saiful Islam',
    age:23,
    language :{
        native:"Bangla",
        Basic :'English'
    }
};
simpleFunction(student);