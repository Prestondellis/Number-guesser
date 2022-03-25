'use strict';
/*
document.querySelector('.message').textContent = 'Correct Number!'
console.log(document.querySelector('.message').textContent)
document.querySelector('.number').textContent = 13
document.querySelector('.score').textContent = 10
document.querySelector('.guess').value = 23
console.log(document.querySelector('.guess').value)
*/
let secretNumber = Math.trunc(Math.random() * 20 ) + 1;
let score = 20
let highscore = 0

const displayMessage = function(message) {
    document.querySelector('.message').textContent = message
}

document.querySelector('.check').addEventListener
('click', function () {
    const guess = Number(document.querySelector('.guess').value)
    console.log(guess, typeof guess)

    // when there is no imput 
    if(!guess){
        displayMessage('No number!');   
        
    // when the player wins
    } else if(guess === secretNumber){
        displayMessage('Correct Number!')
        if (score > highscore){
            highscore = score
            document.querySelector('.highscore').textContent = highscore
        }
        score = 20
        document.querySelector('body').style.
        backgroundColor = '#60b347' 
        document.querySelector('.number').style.
        width = '30rem'
        document.querySelector('.number').textContent = secretNumber
    
    //when the guess is wrong
    } else if (guess !== secretNumber){
        if (score > 1){
            score -- 
            document.querySelector('.score').textContent = score 
            displayMessage(guess > secretNumber ? 'Too High!' : 'Too Low!')
            
        } else {
            displayMessage('You lost the game!')
            document.querySelector('.score').textContent = 0
        }
    }
});

document.querySelector('.again').addEventListener
('click', function(){
    score = 20
    displayMessage('Start guessing...')
    document.querySelector('.score').textContent = '20'
    secretNumber = Math.trunc(Math.random() * 20 ) + 1;
    document.querySelector('.number').textContent = '?'
    document.querySelector('.guess').value = ''

    document.querySelector('body').style.backgroundColor = '#222'
    document.querySelector('.number').style.width = '15rem'
})
