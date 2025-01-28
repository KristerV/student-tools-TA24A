let answer;
let activity = Math.round(Math.random());

if (activity == 0){

    let value = Math.round(Math.random()*100);
    let value1 = Math.round(Math.random()*100);

    console.log(value, value1);
    answer = value + value1;
    let userInput = parseInt(prompt(''));

    if(userInput == answer){
        document.getElementById("useroutput").innerHTML = "ÕIGE";
    }else{
        document.getElementById("useroutput").innerHTML = "VALE";
    }


}else if(activity == 1){

    let value = Math.round(Math.random()*100);
    let value1 = Math.round(Math.random()*100);
    let value2 = Math.round(Math.random()*100);

    console.log(value, value1, value2);
    answer = value + value1 + value2;
    let userInput = parseInt(prompt(''));

    if(userInput == answer){
        document.getElementById("useroutput").innerHTML = "ÕIGE";
    }else{
        document.getElementById("useroutput").innerHTML = "VALE";
    }
}
