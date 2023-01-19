var questionTitle = document.querySelector("#question-title");
var answerChoices = document.querySelector("#choices");
var timeElement = document.querySelector("#time");






// function renderQuestions(question){
    
//     var choiceList = document.createElement("ul"); 
//     answerChoices.appendChild(choiceList)    
//     for(let i=0; i < Object.keys(question).length;i++){
//         var currQuestionIdx = Object.keys(question)[i]
//         var choices = question[currQuestionIdx].answers
       
//         questionTitle.textContent = question[currQuestionIdx]['question'];
//         for(let j=0; j< choices.length;j++){
//             var button = document.createElement("button")
//             button.setAttribute("type","button")
//             button.setAttribute("id","choice-button")
//             choiceList.appendChild(button);
//             button.textContent= choices[j]
//         }
//     }
// };

// function getResult(){
//     var win;
//     var lose;
//     var score = timeElement

//     var choices = document.getElementById("choice-button")
//     choices.addEventListener("click",function(event){
//         var element = event.target
//         var userChoice = element
//         if(userChoice !=)
        

//     })
    

// }

function renderQuestions(questionSet,idx){
    
    var choiceList = document.createElement("ul"); 
    answerChoices.appendChild(choiceList)    
   
    var currQuestionIdx = Object.keys(questionSet)[idx]
    var choices = questionSet[currQuestionIdx]['answers']
    
    
    questionTitle.textContent = questionSet[currQuestionIdx]['question'];
    for(let j=0; j< choices.length;j++){
        var button = document.createElement("button")
        button.setAttribute("type","button")
        button.setAttribute("data-index",j)
        button.setAttribute("id","choice-button")
        choiceList.appendChild(button);
        button.textContent= choices[j]
    }
    
};


function getQuestionSet(){
   var questionSet = {
    questionOne: {
    question: "What is your name?",
    answers: ["Sanele","Phe","Thulile"],
    correct: "Sanele"
   },questionTwo: {
    question: "where do you live?",
    answers: ["London","Joburg","Thailand"],
    correct: "Joburg"
   },questionThree: {
    question: "Your age?",
    answers: [20,21,26],
    correct: 20
   },questionFour: {
    question: "School?",
    answers: ["None","Kenville","CTK"],
    correct: "CTK"
   },questionFive: {
    question: "The day today?",
    answers: ["Monday","Tuesday","Saturday"],
    correct: "Saturday"
   }

}
  
   return questionSet

}



// function playQuiz(){
//     //set win
//     //set loses
//     //set score
//     //check user choice i.e. event listener on li button
//     //if it matches the correct answer at at current index, do nothing, if it doesn't minus 
//     //10 seconds from time remaining
//     //if time runs out then add 1 to loses
//     //if they finish question set add 1 to win 
//     //score is equal to the total of remaining time user had on each question
//     questions = localStorage.getItem('questionSet')
//     for(i=0; i < questions.length;){
//         renderQuestions(questionSet,i)

//     }



// }