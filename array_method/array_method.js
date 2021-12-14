let array =[39,2,33,111,98];

const evenNumber =(value)=>{
 if(value%2 ==0)
 return value
}
let firstEvenNumber =array.find(evenNumber)
let firstEvenNumberIndex =array.findIndex(evenNumber)
console.log(firstEvenNumber)
console.log(firstEvenNumberIndex)