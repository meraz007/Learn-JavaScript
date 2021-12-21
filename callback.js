const getVar =()=>{
    setTimeout(function(){
        console.log('A Function that takes some time');
    },3000)
}
const printSomething =()=> {
    console.log('Another Function');
}
getVar();
printSomething();