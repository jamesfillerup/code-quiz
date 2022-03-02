//  1 start button
//  2 timer
//  3 questions
//  4 game Over
//  5 high Score
//  6 start page shows up

var startButton = document.getElementById("start-btn");
var questionContainerElement=document.getElementById("question-container");
var questionElement= document.getElementById("question");
var answerButtonsElement= document.getElementById("answer-buttons")

let shuffledQuestions, currentQuestionIndex;
//  1 start button
//  1.1 when start button is clicked timer starts and first question pulls up
// 1.2 you cant leave the quiz once started
startButton.addEventListener("click", startGame);

function startGame() {
    console.log("Started");
    startButton.classList.add("hide");
    shuffledQuestions=questions.sort(() => Math.random() - .5);
    currentQuestionIndex= 0
    questionContainerElement.classList.remove("hide");
    setNextQuestion();
};

// 2 timer
// 2.2 timer is 100 seconds
// 2.3 if answer if false then -10 sec from clock
// 2.4 when timer = to 0 game Over

var i=5;

var element = document.getElementById("timer");

    var myTimer = setInterval(function() {
        console.log(i);
        if (i>0){
        element.innerHTML = (i--)
        }
        else{
            clearInterval(myTimer)
            element.innerHTML = ("You're out of time!")
        }
    }, 1000)
    

// else{
//     clearInterval(myTimer)
// }



// 3 questions
// 3.1 if question is correct show if the answer is true or false
// 3.2 if false -10 on timer
// 3.3 have next button for next question to pull up
// 3.4 when questions are all done game is Over
// 3.5 once a answer has been selected then you can't select another
var setNextQuestion = function(){
    showQuestion(shuffledQuestions[currentQuestionIndex]);
};

var showQuestion= function(question){
    questionElement.innerText =question.question
    question.answers.forEach(answer => {
        console.log("cow");
    })

};

var selectAnswer=function(){

};

var questions= [
    {
        question: "What does CSS do?",
        answers: [
            {text: "Nothing", wrong: false},
            {text: "Adds style to HTML", correct: true},
            {text: "It is the bones of the web page", wrong: false},
            {text: "Adds function to the web page", wrong: false}
        ]
    }
]
// 4 game Over
// 4.1 game is over when timer = 0 or questions are finished

// 5 high Score
// 5.1 after game over takes to a score page
// 5.2 high score will be the number of questions they got right
// 5.3 score page will let them save their score to their name of choice
// 5.4 after name is put into score and they click save it will take them back to the start page and it will display high score.

// 6 start page shows up with high score
// 6.1 after they press enter on high score page return to start page with high scores visible 

