const questions = [
    {
        question: "选择你的脸型",
        answers: [
            { text: "長 形 臉 / 方 形 臉", correct: true },
            { text: "圓 形 臉 / 鵝 蛋 臉", correct: false },
        ]
    },
    {
        question: "选择你的五官量比",
        answers: [
            { text: "五 官 量 比 偏 大", correct: true },
            { text: "五 官 量 比 偏 小", correct: false },
        ]
    },
    {
        question: "选择你的脸型风格",
        answers: [
            { text: "偏 豪 邁 直 爽 型", correct: true },
            { text: "偏 溫 柔 内 斂 型", correct: false },
        ]
    },
    {
        question: "选择你的眼神风格",
        answers: [
            { text: "眼 神 專 注 犀 利", correct: true },
            { text: "眼 神 柔 和 溫 暖", correct: false },
        ]
    },
    {
        question: "选择你的身型",
        answers: [
            { text: "身 材 略 偏 高 大", correct: true },
            { text: "身 材 略 偏 小 巧", correct: false },
        ]
    }
];

const h1Element = document.getElementById("h1");
const hrElement = document.getElementById("hr");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");
const showResultButton = document.getElementById("show-result-btn");
const resultText1 = document.getElementById("result-text1");
const resultText2 = document.getElementById("result-text2");
const resultText3 = document.getElementById("result-text3");
const resultText5 = document.getElementById("result-text5");
const result3Btn = document.getElementById("result3-btn");
let selectedAnswers = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = [];
    nextButton.innerHTML = "继续";
    showResultButton.style.display = 'none';
    backButton.style.display = "none"; // Initially hide the back button
    hrElement.style.display = "none";
    showQuestion();
}

function showQuestion() {
    resetState();
    let currentQuestion = questions[currentQuestionIndex];
    let questionNo = currentQuestionIndex + 1;
    questionElement.innerHTML = questionNo + ". " + currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        answerButtons.appendChild(button);
        if (answer.correct){
            button.dataset.correct = answer.correct;
        }
        button.addEventListener("click", selectAnswer);
    });

    if (currentQuestionIndex > 0) {
        backButton.style.display = "block"; // Show the back button after the first question
    } else {
        backButton.style.display = "none"; // Hide on the first question
    }
}

function resetState() {
    nextButton.style.display = "none";
    while(answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function selectAnswer(e) {
    const selectedBtn = e.target;
    const isCorrect = selectedBtn.dataset.correct === "true";
    if (isCorrect) {
        selectedBtn.classList.add("correct");
        score++;
    } else {
        selectedBtn.classList.add("incorrect");
    }
    Array.from(answerButtons.children).forEach(button => {
        if(button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function showScore() {
    resetState();
    if (score > 2) {
        questionElement.innerHTML = '大量感五官';
    } else {
        questionElement.innerHTML = '小量感五官';
    }
    showResultButton.style.display = "block";
    backButton.style.display = "none";
    nextButton.style.display = "none"; // Hide the next button
    document.querySelector(".result").style.display = "block"; // Show the result button
}


function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function handleBackButton() {
    // Decrement the currentQuestionIndex and adjust score if necessary
    if (currentQuestionIndex > 0) {
        if (selectedAnswers[currentQuestionIndex] === true) {
            score--; // Adjust score if going back from a correct answer
        }
        currentQuestionIndex--;
        showQuestion();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz()
    }
});

backButton.addEventListener("click", () => {
    handleBackButton();
});

showResultButton.addEventListener("click", () => {
    resultText1.style.display = "block";
    resultText2.style.display = "block";
    result3Btn.style.display = "block";
    resultText3.style.display = "block";
    resultText5.style.display = "block";
    questionElement.style.display = "none";
    h1Element.innerHTML = "快來领取您的专属奖励";
    hrElement.style.display = "block";
    showResultButton.style.display = "none";
});

startQuiz();
