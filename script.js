'use strict';

/* console.log(document.querySelector(".message").textContent);
document.querySelector(".message").textContent = "keep trying😂";
document.querySelector(".number").textContent = 20;
document.querySelector(".score").textContent = 1

document.querySelector(".guess").value = 10
console.log(document.querySelector(".guess").value); */
let correctNumber = Math.trunc(Math.random() * 20) + 1;
let score = 20;
let highScore = Number(document.querySelector(".highScore"));
console.log(correctNumber);

document.querySelector(".score").textContent = score;
document.querySelector(".highscore").textContent = highScore;
console.log(score);

const displayMessage = function(message) {
    document.querySelector(".message").textContent = message;
}

document.querySelector(".again").addEventListener("click", function () {
    score = 20;
    correctNumber = Math.trunc(Math.random() * 20) + 1;
    console.log(correctNumber);

    displayMessage('Start guessing...');
    document.querySelector("body").style.backgroundColor = "#222";
    document.querySelector('.number').textContent = "?";
    document.querySelector('.number').style.width = '15rem';
    document.querySelector('.guess').value = '';
    document.querySelector('.score').textContent = score

});
document.querySelector(".check").addEventListener("click", function () {

    const guess = Number(document.querySelector(".guess").value);

    //When theres no input
    if (!guess) {
        displayMessage("⛔ No Number");

        //When the player Wins
    } else if (guess == correctNumber) {
        displayMessage("✅ Correct Number");
        document.querySelector(".number").textContent = correctNumber;
        if (score > highScore) highScore = score;
        document.querySelector(".highscore").textContent = highScore;

        document.querySelector("body").style.backgroundColor = "#60b347";
        document.querySelector(".number").style.width = "30rem";

        //When the guess its greater than the Correct number
    } else if (guess !== correctNumber) {
        
        if (score > 1) {
            displayMessage(guess > correctNumber ? '📈 Too High!' : '📉 Too low!');
            score--;
            document.querySelector(".score").textContent = score;
        
        } else {
            document.querySelector(".message").textContent = "🙅🏾‍♂️ you lost the game ";
            document.querySelector(".score").textContent = score;
        }
        //When the correct number its greater than the guess
    }
});