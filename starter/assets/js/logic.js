var timeElement = document.querySelector("#time");
var timeRemaining = 30;
var startButton = document.querySelector("#start");
var questionsDiv = document.querySelector("#questions");
var startScreen = document.querySelector("#start-screen");
timeElement.textContent = timeRemaining;




//A start button that when clicked a timer starts and the first question appears.
    /* TODO: 
        - Make a start button.target the element using queryselector
        - Set event handler to listen for on click event.When button is clicked,
        trigger the timer and game.
        -set a timer that is triggered by on click
        
        - Game function:
                - game starts when start button is clicked
                - question and choices are shown- questions.js
                -when choice is clicked, show correct or incorrect, move on to next q
                - game ends when timer is done or when questions are finished.

    */

// when game is over- display score and high scores. see highscore.html
//



function startTimer(){
    
    timer= setInterval(function(){
        timeRemaining--;
        timeElement.textContent = timeRemaining;
        if (timeRemaining === 0) {
            // Clears interval
            clearInterval(timer)
        };
    },1000)


};

// event listener for start button. when btn is clicked. render the question screen

startButton.addEventListener("click",function(event){
    var element = event.target
    
    if (element.matches("button")== true){
        startScreen.setAttribute("class","hide")
        startTimer();
        questionsDiv.removeAttribute("class");
        
    };
});
