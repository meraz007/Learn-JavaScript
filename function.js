function myFunction(name,callback){
    var myAge = 20;
    callback(myAge);
    console.log("Hello there my Name is " + name)  
}
function hello(age){
    console.log("My Age is " + age)
}
myFunction("Saiful Islam",hello)