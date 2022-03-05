//  1 start button
//  2 timer
//  3 questions
//  4 game Over
//  5 high Score
//  6 start page shows up

//  1 start button
//  1.1 when start button is clicked timer starts and first question pulls up
// 1.2 you cant leave the quiz once started

// 2 timer
// 2.2 timer is 100 seconds
// 2.3 if answer if false then -10 sec from clock
// 2.4 when timer = to 0 game Over

// 3 questions
// 3.1 if question is correct show if the answer is true or false
// 3.2 if false -10 on timer
// 3.3 have next button for next question to pull up
// 3.4 when questions are all done game is Over
// 3.5 once a answer has been selected then you can't select another

// 4 game Over
// 4.1 game is over when timer = 0 or questions are finished

// 5 high Score
// 5.1 after game over takes to a score page
// 5.2 high score will be the number of questions they got right
// 5.3 score page will let them save their score to their name of choice
// 5.4 after name is put into score and they click save it will take them back to the start page and it will display high score.

// 6 start page shows up with high score
// 6.1 after they press enter on high score page return to start page with high scores visible 
var startButton = document.getElementById("start-btn")
var nextQuestion = document.getElementsByClassName("next")
var answerButtonsEl = document.getElementById("answer-buttons")
var questionContainerEl = document.getElementById("question-container");
var questionEl = document.getElementById("question")
var currentQuestion = 0;
var element = document.getElementById("timer");

var score = 0;
var timer = 5;

var questions = [
    {
        question: "What does CSS do?",
        answers: [
            { text: "Nothing", correct: false },
            { text: "Adds style to HTML", correct: true },
            { text: "It is the bones of the web page", correct: false },
            { text: "Adds function to the web page", correct: false }
        ]
    },
    {
        question: 'How do you write and array in JavaScript?',
        answers: [
            { text: "var letters = ('a','b','c')", correct: true },
            { text: "var letters = 'a','b','c'", correct: false },
            { text: "var letters = (a,b,c)", correct: false },
            { text: "var letters = a,b,c", correct: false }
        ]
    },
    {
        question: 'What is a way to write a function in Javascript?',
        answers: [
            { text: 'function;nameOfFunction()', correct: false },
            { text: 'function nameOfFunction()', correct: true },
            { text: 'function:nameOfFunction()', correct: false },
            { text: 'function+nameOfFunction()', correct: false }
        ]
    },
    {
        question: 'How do you put Javascript into HTML?',
        answers: [
            { text: '<javascript>', correct: false },
            { text: '<script>', correct: true },
            { text: '<java>', correct: false },
            { text: '<js>', correct: false }
        ]
    }
]

// for (var i = 0 ; i < nextQuestion.length; i++) {
//     nextQuestion[i].addEventListener('click', showNextQuestion(currentQuestion), false); 
// }

startButton.addEventListener('click', startGame)

for (var i = 0 ; i < nextQuestion.length; i++) {
    nextQuestion[i].setAttribute("onclick", "showNextQuestion();");
    
}

function startGame() {
    console.log("game is starting");
    myTimer();
    startButton.classList.add('hide')
    questionContainerEl.classList.remove('hide')
    // answerButtonsEl.classList.remove('hide')
    currentQuestion = 0;
    questions.length
    showNextQuestion()}

function showQuestion(question) {
    questionEl.innerText = question.question
    
}

function selectAnswer(e) {
    console.log(e)
    currentQuestion++;
    var selectedButton = e.target
    var correct = selectedButton.dataset.correct
    // setStatusClass(document.body, correct)
    console.log(correct);
    if (!correct) {
        timer = timer - 10;
    } else if (correct) {
        score += 5
        document.querySelector("#score").innerHTML = score
    }
}


function showNextQuestion(){
    console.log("next question funciton");
    // for(i=0; i<=questions.length; i++){
        document.getElementById("question").innerHTML = questions[currentQuestion].question;
        question.answers.forEach(answer => {
            const button = document.createElement('button')
            button.innerText = answer.text
            button.classList.add('btn')
            if (answer.correct) {
                button.dataset.correct = answer.correct
            }
            button.addEventListener('click', selectAnswer)
            answerButtonsElement.appendChild(button)
        })

        //i would add a if statment if(i=questions.length){display score card}
    // }
}

document.getElementById("timer");

function myTimer(){

        myInterval = setInterval(function () {
            console.log(timer);
            timer--;
            if (timer > 0) {
                element.innerHTML = timer
                
            }
            else {
                clearInterval(myInterval)
                element.innerHTML = ("You're out of time!")
            }
        }, 1000)
}
