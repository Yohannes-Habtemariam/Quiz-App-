"use strict";

const question = document.querySelector("#question");
const choices = document.querySelectorAll(".choice-text")

let currentQuestion = {};
let acceptingAnswers = true;
let score = 0;
let questionCounter = 0;
let availableQuestions = [];

let questions = [
    {
        question: "Inside which HTML element do we put the JavaScript?",
        choice1: "<script>",
        choice2: "<javaScript>",
        choice3: "<scripting>",
        choice4: "<js>",
        answer: 1
    }, 

    {
        question: "What is the correct syntax for referring to an external script called `xxx.js`?",
        choice1: "<script href = `xxx.js`>",
        choice2: "<script name = `xxx.js`>",
        choice3: "<script scr = `xxx.js`>",
        choice4: "<script file = `xxx.js`>",
        answer: 3
    }, 

    {
        question: "How do you write `Hello World` in alert box?",
        choice1: "msgBox(`Hello World`)",
        choice2: "alertBox(`Hello World`)",
        choice3: "msg(`Hello World`)",
        choice4: "alert(`Hello World`)",
        answer: 4 
    }
]

// How to give points to the correct answer
let currentAnswer = 5;
let maximumQuestions = 3;

// Game functions
const startQuiz  = () => {
    questionCounter = 0;
    score = 0;
    availableQuestions = [...questions];
    console.log(availableQuestions);
    getNewQuestion();
};

const getNewQuestion = () => {
    questionCounter++;
    let questionIndex = Math.floor(Math.random() * availableQuestions.length);
    currentQuestion = availableQuestions[questionIndex];
    question.textContent = currentQuestion.question;

    choices.forEach ( choice => {
        let number = choice.dataset["number"];
        choice.textContent = currentQuestion["choice" + number]
    });

    availableQuestions.slice(questionIndex, 1);
    acceptingAnswers = true;

    choices.forEach(choice => {
        choice.addEventListener("click", (event) => {
            if (!acceptingAnswers){
                return acceptingAnswers = false;
            }
            let selectedChoice = event.target;
            let selectedAnswer = selectedChoice.dataset["number"];

            let classToApply = selectedAnswer == currentQuestion.answer ? "Correct" : "Incorrect";
            console.log(classToApply);
           
            getNewQuestion();
        });
    });
};
startQuiz();