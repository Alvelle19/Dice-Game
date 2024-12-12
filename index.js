var randomNumber1 = Math.floor(Math.random() * 6) + 1;

function diceOneRoll(){
if(randomNumber1 === 1){
   return document.querySelector(".img1").setAttribute("src","./images/dice1.png");
}if(randomNumber1 === 2){
    return document.querySelector(".img1").setAttribute("src", "./images/dice2.png");
}if(randomNumber1 === 3){
    return document.querySelector(".img1").setAttribute("src", "./images/dice3.png");
}if(randomNumber1 === 4){
    return document.querySelector(".img1").setAttribute("src", "./images/dice4.png");
}if(randomNumber1 === 5){
    return document.querySelector(".img1").setAttribute("src", "./images/dice5.png");
}else if(randomNumber1 === 6) {
    return document.querySelector(".img1").setAttribute("src", "./images/dice6.png")
}
}



var randomNumber2 = Math.floor(Math.random() * 6) + 1;

function diceTwoRoll(){
if(randomNumber2 === 1){
    document.querySelector(".img2").setAttribute("src", "./images/dice1.png");
}if(randomNumber2 === 2){
    document.querySelector(".img2").setAttribute("src", "./images/dice2.png");
}if(randomNumber2 === 3){
    document.querySelector(".img2").setAttribute("src", "./images/dice3.png");
}if(randomNumber2 === 4){
    document.querySelector(".img2").setAttribute("src", "./images/dice4.png");
}if(randomNumber2 === 5){
    document.querySelector(".img2").setAttribute("src", "./images/dice5.png");
}else if(randomNumber2 === 6){
    document.querySelector(".img2").setAttribute("src", "./images/dice6.png")
}
}

function displayWinner(){
    if(randomNumber1 > randomNumber2){
    return document.querySelector("h1").innerHTML = "Player 1 Wins!"
    } else if(randomNumber2 > randomNumber1){
        return document.querySelector("h1").innerHTML = "Player 2 Wins!"
    }else{
        return document.querySelector("h1").innerHTML = "Draw!"
    }
}

diceOneRoll();
diceTwoRoll();
displayWinner();

