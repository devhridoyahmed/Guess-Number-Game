"use strict";
// secret number generator
let secretNumber = Math.trunc(Math.random() * 20) + 1;

// initial variables
let score = 20;
let highScore = 0;

// to change hints board like high or low
let hints = function (hints){
    return document.querySelector(".hints").textContent = hints;
};

// to change bg color of body
let bgColor =  function (color){
    return document.querySelector("body").style.backgroundColor = color;
};

// to change the score board
let scoreBoard = function (score) {
    document.querySelector(".score").textContent = score;
};

// to change the Highscore board
let highScoreBoard = function (hs){
    highScore = hs;
    document.querySelector(".highScore").textContent = highScore;
};

// to change shape of secret box 
let secretBox = function (width) {
    document.querySelector(".secretNumber").style.width = width
};

// showing secret number
let showSecretNumber = function (value) {
    document.querySelector(".secretNumber").textContent = value;
};

// button for playing game
document.querySelector(".guess").addEventListener('click', gameOn);

function gameOn () {
    // storing input value in number variable
    let number = Number(document.querySelector(".number").value);

    if (!number) {
        // if user give null or undefined value
        hints("⛔ Invalid Number!");
        bgColor("#550000");

    } else if (number === secretNumber) {
        // if user give correct value
        hints("You won 🥇");
        // showing correct number
        showSecretNumber(secretNumber);

        bgColor("#005500")
        secretBox("12rem");

        // setting the highscore
        highScoreBoard((score > highScore) ? score : highScore);

    } else {

        // putting msg on hints
        hints((number > secretNumber) ? "📈 too high ..." : "📉 too low ..." );

        // setting neutral bg
        bgColor("dimgray");

        score--;
        // decrement or score board
        if (score >= 1) {
            scoreBoard(score);
        } else {
            scoreBoard("You lost the game 💥");
            bgColor("#550000");
        }
    }
}

// buttons for resetting game
document.querySelector(".again").addEventListener('click', restartGame);

function restartGame () {
    score = 20;
    secretNumber = Math.trunc(Math.random() * 20) + 1;

    // resetting items 
    hints("Start Guessing...")
    bgColor("dimgray");
    secretBox("8rem");
    scoreBoard(score);
    showSecretNumber("?");
    document.querySelector(".number").value = '';

    console.log(secretNumber);
}