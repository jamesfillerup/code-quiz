// //  1 start button
// //  2 timer
// //  3 questions
// //  4 game Over
// //  5 high Score
// //  6 start page shows up

// var startButton = document.getElementById("start-btn");
// var questionContainerElement=document.getElementById("question-container");
// var questionElement= document.getElementById("question");
// var answerButtonsElement= document.getElementById("answer-buttons")

// let shuffledQuestions, currentQuestionIndex;

// //  1 start button
// //  1.1 when start button is clicked timer starts and first question pulls up
// // 1.2 you cant leave the quiz once started
// startButton.addEventListener("click", startGame);
// nextButton.addEventListener('click', () => {
//     currentQuestionIndex++
//     setNextQuestion()
// })

// function startGame() {
//     startButton.classList.add('hide')
//     shuffledQuestions = questions.sort(() => Math.random() - .5)
//     currentQuestionIndex = 0
//     questionContainerElement.classList.remove('hide')
//     setNextQuestion()
// }

// // 2 timer
// // 2.2 timer is 100 seconds
// // 2.3 if answer if false then -10 sec from clock
// // 2.4 when timer = to 0 game Over

// var i=5;

// var element = document.getElementById("timer");

//     var myTimer = setInterval(function() {
//         console.log(i);
//         if (i>0){
//         element.innerHTML = (i--)
//         }
//         else{
//             clearInterval(myTimer)
//             element.innerHTML = ("You're out of time!")
//         }
//     }, 1000)
    

// // else{
// //     clearInterval(myTimer)
// // }



// // 3 questions
// // 3.1 if question is correct show if the answer is true or false
// // 3.2 if false -10 on timer
// // 3.3 have next button for next question to pull up
// // 3.4 when questions are all done game is Over
// // 3.5 once a answer has been selected then you can't select another
// var setNextQuestion = function(){
//     showQuestion(shuffledQuestions[currentQuestionIndex]);
// };

// var showQuestion= function(question){
//     questionElement.innerText =question.question
//     question.answers.forEach(answer => {
//         var button = document.createElement("button")
//         button.innerText= answer.text
//         button.classList.add('btn')
//         if (answer,correct){
//             button.dataset.correct = answer.correct
//         }
//         button.addEventListener("click", selectAnswer)
//         answerButtonsElement.appendChild(button)
//     })
// };

// var selectAnswer=function(){

// };

// var questions= [
//     {
//         question: "What does CSS do?",
//         answers: [
//             {text: "Nothing", correct: false},
//             {text: "Adds style to HTML", correct: true},
//             {text: "It is the bones of the web page", correct: false},
//             {text: "Adds function to the web page", correct: false}
//         ]
//     }
// ]
// 4 game Over
// 4.1 game is over when timer = 0 or questions are finished

// 5 high Score
// 5.1 after game over takes to a score page
// 5.2 high score will be the number of questions they got right
// 5.3 score page will let them save their score to their name of choice
// 5.4 after name is put into score and they click save it will take them back to the start page and it will display high score.

// 6 start page shows up with high score
// 6.1 after they press enter on high score page return to start page with high scores visible 

const startButton = document.getElementById('start-btn')
const nextButton = document.getElementById('next-btn')
const questionContainerElement = document.getElementById('question-container')
const questionElement = document.getElementById('question')
const answerButtonsElement = document.getElementById('answer-buttons')
var i=100;

let shuffledQuestions, currentQuestionIndex

    startButton.addEventListener('click', startGame)
    nextButton.addEventListener('click', () => {
    currentQuestionIndex++
    setNextQuestion()
    })

    function startGame() {
    startButton.classList.add('hide')
    shuffledQuestions = questions.sort(() => Math.random() - .5)
    currentQuestionIndex = 0
    questionContainerElement.classList.remove('hide')
    setNextQuestion()
    }

    function setNextQuestion() {
    resetState()
    showQuestion(shuffledQuestions[currentQuestionIndex])
    }

    function showQuestion(question) {
    questionElement.innerText = question.question
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
    }

    function resetState() {
    clearStatusClass(document.body)
    nextButton.classList.add('hide')
    while (answerButtonsElement.firstChild) {
        answerButtonsElement.removeChild(answerButtonsElement.firstChild)
    }
    }

    function selectAnswer(e) {
    const selectedButton = e.target
    const correct = selectedButton.dataset.correct
    console.log(correct);
    if (correct != true){
        i=i-10;
    }    

    setStatusClass(document.body, correct)
    Array.from(answerButtonsElement.children).forEach(button => {
        setStatusClass(button, button.dataset.correct)
    })
    if (shuffledQuestions.length > currentQuestionIndex + 1) {
        nextButton.classList.remove('hide')
    } else {
        startButton.innerText = 'Restart'
        startButton.classList.remove('hide')
    }
    }

    function setStatusClass(element, correct) {
    clearStatusClass(element)
    if (correct) {
        element.classList.add('correct')
    } else {
        element.classList.add('wrong')
    }
    }

    function clearStatusClass(element) {
    element.classList.remove('correct')
    element.classList.remove('wrong')
    }

    const questions = [
    {
        question: "What does CSS do?",
        answers: [
            {text: "Nothing", correct: false},
            {text: "Adds style to HTML", correct: true},
            {text: "It is the bones of the web page", correct: false},
            {text: "Adds function to the web page", correct: false}
        ]
    },
    {
        question: 'How do you write and array in JavaScript?',
        answers: [
        { text: "var letters = ('a','b','c')" , correct: true },
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

var endGame = function(){// redirect to a new webpage that has highscore
    if (i<=0 ||  ){ //question =0

    }
}



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
    

