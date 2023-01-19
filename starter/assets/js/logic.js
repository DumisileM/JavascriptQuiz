var timeElement = document.querySelector("#time");
var startButton = document.querySelector("#start");
var questionsDiv = document.querySelector("#questions");
var startScreen = document.querySelector("#start-screen");
var timeRemaining = 30;
var score;

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
function playQuiz(){
    questionsDiv.removeAttribute("class");
    var score =0 
    var answerFeedback = document.createElement("p");
    questionsDiv.appendChild(answerFeedback);
    var questionSet = getQuestionSet();
    var questionBankKeys = Object.keys(questionSet);
    var i = 0;
    

    while(true){
        if(i == questionBankKeys.length){
            break;
        };
        renderQuestions(questionSet,i);
        
        
        
        var correct = questionSet[questionBankKeys[i]]['correct']
        
        console.log(correct)
        i++
        
        
        var choiceButton = document.querySelectorAll('#choice-button');
        
        for(let j=0; j < choiceButton.length;j++){
            
            choiceButton[j].addEventListener("click",function(event){
              
                var target= event.target;
                if(target.matches("button")&&choiceButton[j].dataset.index !=j){
                    console.log('yes')
                }
                if(target.textContent == correct){
                    answerFeedback.textContent = "Correct!";
                    // score += timeElement.textContent;
                }else{
                    answerFeedback.textContent = "Wrong!";
                    // timeRemaining - 10;
                }

                    
        })
      
        


        }
    }
    
    // for (let i=0; i < questionBankKeys.length;){
    //     renderQuestions(questionSet,i);
    //     var correct = questionSet[questionBankKeys[i]]['correct']
    //     console.log(correct)
        
        
    //     var choiceButton = document.querySelectorAll('#choice-button');
        
    //     for(let j=0; j < choiceButton.length;j++){
         
    //         choiceButton[j].addEventListener("click",function(event){
    //             i++
    //             var target= event.target;
    //             console.log(target.textContent)
    //             if(target.textContent == correct){
    //                 answerFeedback.textContent = "Correct!";
    //                 score += timeElement.textContent;
    //             }else{
    //                 answerFeedback.textContent = "Wrong!";
    //                 timeRemaining - 10;
    //             }

                 
    //     })
        


    //     }
  
    // }
}

// event listener for start button. when btn is clicked. render the question screen


startButton.addEventListener("click",function(event){
    var element = event.target
    
    if (element.matches("button")== true){
        startScreen.setAttribute("class","hide")
        startTimer();
        playQuiz();
        
    };
});
