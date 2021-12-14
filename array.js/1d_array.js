function highestScore(score){
    var max = score[0];
    for(var i=1;i<score.length;i++){
        if (max>score[i]) {
            max=score[i];
        }
    }
    return max;
    
    }
    
    score =[12,43,54,76,56];
    var number=highestScore(score);
    console.log(number);


    var array =[12,34,76,87,33];
    var i;
   
    console.log( Math.max(array))
   