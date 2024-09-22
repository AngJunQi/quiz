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

const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");

let currentQuestionIndex = 0;
let score = 0;

function startQuiz(){
    currentQuestionIndex = 0;
    score = 0;
    nextButton.innerHTML = "继续";
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
    })
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
    if (score > 2){
        questionElement.innerHTML = '大量感五官';
    } else {
        questionElement.innerHTML = '小量感五官';
    }
    nextButton.innerHTML = "解锁奖励";
    nextButton.style.display = "block";
}

function handleNextButton() {
    currentQuestionIndex++;
    if(currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        
        showScore();
    }
}

nextButton.addEventListener("click", ()=>{
    if(currentQuestionIndex < questions.length){
        handleNextButton();
    } else {
        startQuiz()
    }
})
startQuiz();
