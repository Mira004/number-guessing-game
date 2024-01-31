const min=1;
const max=100;
let result=Math.floor(Math.random()*max)+min;

let attempts=0;
let running=true;
let guess;
while(running){


    guess=window.prompt(`Enter a Number between ${min}-${max}`)


if(guess <=100 && guess>=1 && !isNaN(guess)){
    attempts++;
   
    if(guess > result){
        window.alert('Too High! try again');
    }else if(guess<result){
        window.alert('Too Low! try again');
    }
    else{
    window.alert(`Correct! the number was ${result} and you guessed it with ${attempts}attempts.`);
    
   running=false;
    }

    

}
else{
    window.alert('Please Enter a valid number');
    
}
}
