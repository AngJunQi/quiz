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
        question: "选择你的性格",
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

const questions2 = [
    {
        question: "选择你的脸型",
        answers: [
            { text: "脸部长度大于宽度 线条流畅", answer: '1A' },
            { text: "脸部长度和宽度相近 线条圆润 下巴较短", answer: '1B' },
            { text: "颚骨宽度大于额头和下巴 呈现倒三角形", answer: '1C' },
        ]
    },
    {
        question: "选择你的眼型",
        answers: [
            { text: "眼尾上挑 内眼角偏尖锐 眼睛较窄长", answer: '2A' },
            { text: "上眼呈圆弧 内眼角偏圆钝 眼睛较宽", answer: '2B' },
            { text: "上眼呈圆弧 眼尾下垂 下眼较平直", answer: '2C' },
        ]
    },
    {
        question: "选择你的鼻型",
        answers: [
            { text: "线条笔直 鼻尖精致", answer: '3A' },
            { text: "鼻头圆润饱满", answer: '3B' },
            { text: "鼻头较尖且有弧度 微微鹰钩", answer: '3C' },
        ]
    },
    {
        question: "选择你的嘴型",
        answers: [
            { text: "唇部形状小巧 薄厚适中", answer: '4A' },
            { text: "唇部形状适中 厚度偏薄", answer: '4B' },
            { text: "唇部形状偏大且饱满", answer: '4C' },
        ]
    }
];

const app1 = document.getElementById("app1");
const app2 = document.getElementById("app2");
const h1Element = document.getElementById("h1");
const hrElement = document.getElementById("hr");
const questionElement = document.getElementById("question");
const answerButtons = document.getElementById("answer-buttons");
const nextButton = document.getElementById("next-btn");
const backButton = document.getElementById("back-btn");
const showResultButton = document.getElementById("show-result-btn");
const showResultButton2 = document.getElementById("show-result-btn2");
const resultText1 = document.getElementById("result-text1");
const resultText2 = document.getElementById("result-text2");
const resultText3 = document.getElementById("result-text3");
const resultText5 = document.getElementById("result-text5");
const result3Btn = document.getElementById("result3-btn");
const h1Element_2 = document.getElementById("h1-2");
const hrElement_2 = document.getElementById("hr");
const questionElement_2 = document.getElementById("question-2");
const answerButtons_2 = document.getElementById("answer-buttons-2");
const nextButton_2 = document.getElementById("next-btn-2");
const backButton_2 = document.getElementById("back-btn-2");
const showResultButton2_2 = document.getElementById("show-result-btn-2");
const resultText1_2 = document.getElementById("result-text1");
const resultText2_2 = document.getElementById("result-text2");
const resultText3_2 = document.getElementById("result-text3");
const resultText5_2 = document.getElementById("result-text5");
const result3Btn_2 = document.getElementById("result3-btn");

// Adding new elements for displaying the final result messages
const daliangganMessage = document.getElementById("dalianggan-message");
const xiaoliangganMessage = document.getElementById("xiaolianggan-message");

let selectedAnswers = [];
let selectedAnswers2 = [];
let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
    app2.style.display = 'none';
    currentQuestionIndex = 0;
    score = 0;
    selectedAnswers = [];
    nextButton.innerHTML = "继续";
    showResultButton.style.display = 'none';
    showResultButton2.style.display = 'none';
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
        if (answer.correct) {
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

function startQuiz2() {
    currentQuestionIndex = 0;
    selectedAnswers2 = [];
    nextButton_2.innerHTML = "继续";
    backButton_2.style.display = "none";
    showResultButton2_2.style.display = 'none';
    showQuestion2();
}

function showQuestion2() {
    resetState2();
    let currentQuestion = questions2[currentQuestionIndex];
    questionElement_2.innerHTML = currentQuestion.question;

    currentQuestion.answers.forEach(answer => {
        const button = document.createElement("button");
        button.innerHTML = answer.text;
        button.classList.add("btn");
        button.dataset.answer = answer.answer;
        answerButtons_2.appendChild(button);
        button.addEventListener("click", selectAnswer2);
    });

    if (currentQuestionIndex > 0) {
        backButton_2.style.display = "block";
    } else {
        backButton_2.style.display = "none";
    }
}

function resetState() {
    nextButton.style.display = "none";
    while (answerButtons.firstChild) {
        answerButtons.removeChild(answerButtons.firstChild);
    }
}

function resetState2() {
    nextButton_2.style.display = "none";
    while (answerButtons_2.firstChild) {
        answerButtons_2.removeChild(answerButtons_2.firstChild);
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
        if (button.dataset.correct === "true") {
            button.classList.add("correct");
        }
        button.disabled = true;
    });
    nextButton.style.display = "block";
}

function selectAnswer2(e) {
    const selectedBtn = e.target;
    const selectedAnswer = selectedBtn.dataset.answer;
    selectedAnswers2[currentQuestionIndex] = selectedAnswer;

    Array.from(answerButtons_2.children).forEach(button => {
        button.disabled = true;
    });

    nextButton_2.style.display = "block";
}

function showScore() {
    resetState();
    
    // Show specific result message based on the score
    if (score > 2) {
        questionElement.innerHTML = '大量感五官';
        daliangganMessage.style.display = "block"; // Show 大量感 message
    } else {
        questionElement.innerHTML = '小量感五官';
        xiaoliangganMessage.style.display = "block"; // Show 小量感 message
    }

    showResultButton.style.display = "block";
    showResultButton2.style.display = "block";
    backButton.style.display = "none";
    nextButton.style.display = "none"; // Hide the next button
    document.querySelector(".result").style.display = "block"; // Show the result button
}

function showResult2() {
    resetState2();
    
    const finalAnswer = selectedAnswers2.join('');
    let resultMessage;

    // Mapping answer combinations to results
    const resultsMapping = {
        '猫系长相': [
            '1A2A3A4A', '1A2A3B4A', '1A2A3B4B',
            '1B2A3A4A', '1B2A3A4B', '1B2A3B4A', '1B2A3B4B',
            '1B2A3C4A', '1B2A3C4B'
        ],
        '狼系长相': [
            '1A2A3A4B', '1A2B3C4B', '1C2B3A4B', '1C2B3A4C',
            '1C2B3B4B', '1C2B3B4C', '1C2B3C4C'
        ],
        '鹿系长相': [
            '1A2B3A4A', '1A2B3A4B', '1A2B3A4C',
            '1A2B3B4B', '1A2B3B4C'
        ],
        '鱼系长相': [
            '1A2A3A4C', '1A2A3B4C', '1A2A3C4C',
            '1A2B3C4C', '1A2C3C4C', '1B2A3A4C',
            '1B2A3B4C', '1B2A3C4C', '1C2C3C4C'
        ],
        '鸟系长相': [
            '1A2A3C4A', '1A2B3C4A', '1A2C3C4A',
            '1C2A3C4A', '1C2B3C4A', '1C2B3A4A',
            '1C2C3C4A', '1C2C3C4B'
        ],
        '狐系长相': [
            '1A2A3C4B', '1A2C3C4B', '1C2A3A4A',
            '1C2A3A4B', '1C2A3A4C', '1C2A3B4A',
            '1C2A3B4B', '1C2A3B4C', '1C2B3B4A'
        ],
        '兔系长相': [
            '1A2B3B4A', '1A2C3B4A', '1B2B3A4A',
            '1B2B3A4B', '1B2B3A4C', '1B2B3B4A',
            '1B2B3C4A', '1B2B3C4B', '1B2B3C4C',
            '1B2C3C4A', '1B2C3C4B', '1B2C3C4C'
        ],
        '犬系长相': [
            '1A2C3A4A', '1A2C3A4B', '1A2C3A4C',
            '1A2C3B4B', '1A2C3B4C', '1B2C3A4A',
            '1B2C3A4B', '1B2C3A4C', '1B2C3B4B',
            '1C2C3A4A', '1C2C3A4B', '1C2C3A4C',
            '1C2C3B4A', '1C2C3B4B', '1C2C3B4C'
        ],
        '豚系长相': [
            '1B2B3B4B', '1B2B3B4C', '1B2C3B4A',
            '1B2C3B4C'
        ],
        '蛇系长相': [
            '1C2A3C4B', '1C2A3C4C', '1C2B3C4B'
        ]
    };

    // Find which group the final answer belongs to
    for (const [result, combinations] of Object.entries(resultsMapping)) {
        if (combinations.includes(finalAnswer)) {
            resultMessage = result;
            break;
        }
    }

    // Display the result
    if (resultMessage) {
        questionElement_2.innerHTML = `您的结果是：${resultMessage}`;
    } else {
        questionElement_2.innerHTML = "无法确定您的结果，请重新答题。";
    }

    nextButton_2.style.display = "none";
    backButton_2.style.display = "none";
    showResultButton2_2.style.display = "block";
}


function handleNextButton() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions.length) {
        showQuestion();
    } else {
        showScore();
    }
}

function handleBackButton() {
    if (currentQuestionIndex > 0) {
        if (selectedAnswers[currentQuestionIndex] === true) {
            score--; // Adjust score if going back from a correct answer
        }
        currentQuestionIndex--;
        showQuestion();
    }
}

function handleNextButton2() {
    currentQuestionIndex++;
    if (currentQuestionIndex < questions2.length) {
        showQuestion2();
    } else {
        showResult2();
    }
}

function handleBackButton2() {
    if (currentQuestionIndex > 0) {
        currentQuestionIndex--;
        showQuestion2();
    }
}

nextButton.addEventListener("click", () => {
    if (currentQuestionIndex < questions.length) {
        handleNextButton();
    } else {
        startQuiz();
    }
});

backButton.addEventListener("click", () => {
    handleBackButton();
});

nextButton_2.addEventListener("click", () => {
    if (currentQuestionIndex < questions2.length) {
        handleNextButton2();
    } else {
        startQuiz2();
    }
});

backButton_2.addEventListener("click", () => {
    handleBackButton2();
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
    showResultButton2.style.display = "none";
    daliangganMessage.style.display = "none";
    xiaoliangganMessage.style.display = "none";
});

showResultButton2.addEventListener("click", () => {
    app1.style.display = 'none';
    app2.style.display = 'block';
    startQuiz2();
});

showResultButton2_2.addEventListener("click", () => {
    app1.style.display = 'block';
    app2.style.display = 'none';
    resultText1.style.display = "block";
    resultText2.style.display = "block";
    result3Btn.style.display = "block";
    resultText3.style.display = "block";
    resultText5.style.display = "block";
    questionElement.style.display = "none";
    h1Element.innerHTML = "快來领取您的专属奖励";
    hrElement.style.display = "block";
    showResultButton.style.display = "none";
    showResultButton2.style.display = "none";
    daliangganMessage.style.display = "none";
    xiaoliangganMessage.style.display = "none";
});

startQuiz();
