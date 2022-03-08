var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");
var answerSelectEl = document.getElementById("answer-select");
var startButton = document.getElementById("start");
var welcomeTitle = document.getElementById("welcome-title");
var finalScoreEl = document.getElementById("question");

var timerVal;
var secondsRemaining = 20;
var currentQuestion = 0;

var questionArray = [
  {
    question:
      "Cheese on toast cow swiss. Boursin babybel cut the cheese rubber cheese ricotta melted cheese parmesan bavarian bergkase?",
    choices: ["Cheddar", "Brie", "Obechon", "Comte"],
    answer: "Brie",
  },
  {
    question: "Who cut the cheese?",
    choices: ["Swiss", "Jack", "Gambrazola", "Chevre"],
    answer: "Jack",
  },
  {
    question: "Is the moon made of cheese?",
    choices: ["Yes", "No"],
    answer: "No",
  },
  {
    question: "Which of these is not a cheese?",
    choices: ["Emmental", "Camembert", "Nooch", "Taleggio"],
    answer: "Nooch",
  },
];

function startQuiz() {
  timerEl.innerText = secondsRemaining;
  timerVal = setInterval(function () {
    if (secondsRemaining >= 1) {
      secondsRemaining--;
      timerEl.innerText = secondsRemaining;
    } else {
      alert("Time is Up! Post your score!");
      clearInterval(timerVal);
      postScore();
    }
  }, 1000);
  welcomeTitle.classList.add("hide");
  startButton.classList.add("hide");
  questionEl.classList.remove("hide");
  answerEl.classList.remove("hide");
  timerEl.classList.remove("hide");
  displayQuestion();
}

var displayQuestion = function () {
  var questionNumber = questionArray[currentQuestion];
  console.log(questionNumber.answer);
  // displays first question
  questionEl.innerText = questionNumber.question;
  //loop through the currentQuestion choices and create a button for each one
  questionNumber.choices.forEach(function (choices) {
    var choiceButton = document.createElement("button");
    choiceButton.classList.add("my-1", "btn", "btn-primary", "w-50");
    choiceButton.innerText = choices;
    choiceButton.onclick = answerSelect;
    answerEl.appendChild(choiceButton);
  });
};
// correctAnswer and wrongAnswer function or one with an if else statement...
var answerSelect = function () {
  if (this.innerText !== questionArray[currentQuestion].answer) {
    console.log(questionArray[currentQuestion].answer);
    secondsRemaining -= 3;
    timerEl.innerText = secondsRemaining;
    answerSelectEl.textContent = "Wrong";
  } else {
    answerSelectEl.textContent = "Correct";
  }
  // flash feedback on page
  answerSelectEl.setAttribute("class", "feedback");
  setTimeout(function () {
    answerSelectEl.setAttribute("class", "feedback hide");
  }, 1000);
  console.log(currentQuestion);
  currentQuestion++;

  questionEl.textContent = " ";
  answerEl.textContent = " ";
  if (currentQuestion === questionArray.length) {
    postScore();
  } else {
    displayQuestion();
  }
};
var postScore = function () {
  clearInterval(timerVal);
  questionEl.textContent = "Your score is: " + secondsRemaining;
};
startButton.addEventListener("click", startQuiz);

// postScore function after Times up Alert
// high scores link either places / appends scores to page or displays an alert box.
