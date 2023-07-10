var startBtn = document.getElementById('startBtn');
var timeEl = document.getElementById('time');
var time = 5;
var score = 0;
var questionEl = document.getElementById('question');
var answerButtons = document.getElementById('answer-buttons');
var startScreen = document.getElementById('startScreen');
var gameBoard = document.getElementById('gameBoard');
var scoreBoard = document.getElementById('scoreBoard');
var currentQuestionIndex = 0;

startBtn.addEventListener("click", function() {
    startScreen.classList.add("hide");
    startGame();
});

// questions
var questions = [
    {
        question: "what is the markup language in coding out of all of these answers ",
        answers: ["HTML", "CSS", "JavaScript", "Python"],
        correctAnswer: "HTML"
    },
    {
        question: "What language out of these options do you use to style a web application",
        answers: ["HTML", "CSS", "JavaScript", "Python"],
        correctAnswer: "CSS"
    },
    {
        question: "What do you use to code the logic of a web application",
        answers: ["HTML", "CSS", "JavaScript", "Python"],
        correctAnswer: "JavaScript"
    },
    {
        question: "What does a console.log() do ",
        answers: ["displays images", "logs out images", "tells you what to do", "Logs out specific information or messages"],
        correctAnswer: "Logs out specific information or messages"
    }
];

function startGame() {
    gameBoard.classList.remove("hide");
    displayQuestion();
    countDown();
}

function displayQuestion() {
    var question = questions[currentQuestionIndex];
    questionEl.textContent = question.question;
    answerButtons.innerHTML = "";

    for (var i = 0; i < question.answers.length; i++) {
        var answer = question.answers[i];
        var button = document.createElement("button");
        button.textContent = answer;
        button.classList.add("button");
        button.addEventListener("click", checkAnswer);
        answerButtons.appendChild(button);
    }
}

function checkAnswer(event) {
    var selectedAnswer = event.target.textContent;
    var question = questions[currentQuestionIndex];

    if (selectedAnswer === question.correctAnswer) {
        score++;
        console.log("Correct!");
    } else {
        console.log("Wrong!");
    }

    currentQuestionIndex++;

    if (currentQuestionIndex < questions.length) {
        displayQuestion();
    } else {
        endGame();
    }
}

function submitScore() {
    var usernameInput = document.getElementById("username").value;
    var newScore = { username: usernameInput, score: score };

    scores.push(newScore);

    document.getElementById("username").value = "";

    resetGame();
}

function countDown() {
    timeEl.textContent = time;

    var timer = setInterval(function() {
        time--;
        timeEl.textContent = time;

        if (time === 0) {
            clearInterval(timer);
            endGame();
        }
    }, 1000);
}
function endGame() {
    gameBoard.classList.add("hide");
    scoreBoard.classList.remove("hide");
    console.log("Game Over");
    console.log("Score:", score);
    var showScore = "Your Score: " + score;
    var scoreEl = document.getElementById("scoreMessage");
    scoreEl.textContent = showScore;
    location.reload();
}
