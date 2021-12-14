/*
var studentList =[
    ["meraz",15],
    ["sifat",16],
    ["rahim",17],
    ["korim",18],
    ["jane",19],
]

for (var x =0;x<5;x++){
    for(var y=0; y<2;y++){
        console.log(studentList[x][y]); 
    }
}
*/
var studentList =[
    ["meraz",15],
    ["sifat",16],
    ["rahim",17],
    ["korim",18],
    ["jane",19],
];
var number;
function myFunction(studentList) {
    var highestScorer =studentList[0][0];
    var highestScore =studentList[0][1];
    for(var x =1;x<studentList.length;x++){
        if(highestScore<studentList[x][1]){
            highestScore =studentList[x][1];
            highestScorer =studentList[x][0];
        }
    }
    return highestScorer;
}
var name = myFunction(studentList);
console.log(name)