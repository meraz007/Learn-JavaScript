var i;
for(i=1;i<=100;i++){
  if(i%3==0){
    console.log(i + 'Fizz')
    if(i%3==0 && i%5==0){
        console.log(i + 'FizzFiver')
    }
  }
  else if(i%5==0){
    console.log(i + 'Fiver')
  }
  else{
    console.log(i)
  }
}