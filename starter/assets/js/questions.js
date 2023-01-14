var questionTitle = document.querySelector("#question-title");
var answerChoices = document.querySelector("#choices");

function renderQuestions(question, choices){
    questionTitle.textContent = question;
    var choiceList = document.createElement("ul"); 
    answerChoices.appendChild(choiceList)                               
  

    var li = document.createElement("li")
    for(let i = 0; 0 < choices.length; i++){
        li.textContent =choices[i]
        choiceList.appendChild(li)

    }
    choiceList.appendChild(li);
    
    // var buttonItem = document.createElement("button");
    // li.appendChild(buttonItem)
    // buttonItem.textContent =choices[i];
        

        
    
        


   

};
function questionSet(){
   var questionSet = {
    question: "What is your name",
    answers: ["Sanele","Phe","Thulile"],
    correct: "Sanele"
   }
   console.log(questionSet.question)
   return questionSet

}
var questionsAnswers = questionSet()
renderQuestions(questionsAnswers.question,questionsAnswers.answers)