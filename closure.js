function myFunction(){
    var x =10;
    return function(){
        var y =20;
        console.log('sum: '+ (x+y))
    }
}
myFunction()()