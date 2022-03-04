var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");
var answerSelectEl = document.getElementById("answer-select");
var startButton = document.getElementById("start");
var welcomeTitle = document.getElementById("welcome-title");
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
];

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  timerEl.innerText = secondsRemaining;
  timerVal = setInterval(function () {
    if (secondsRemaining >= 1) {
      secondsRemaining--;
      timerEl.innerText = secondsRemaining;
    } else {
      alert("Time is Up! Post your score!");
      clearInterval(timerVal);
      // postScore();
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
  // correctAnswer and wrongAnswer function or one with an if else statement...
  var answerSelect = function () {
    if (this.value == questionArray[currentQuestion].answer) {
      console.log(this.value !== questionArray[currentQuestion].answer);
      secondsRemaining -= 3;
      timerEl.innerText = secondsRemaining;
      answerSelectEl.textContent = "Wrong";
    } else {
      answerSelectEl.textContent = "Correct";
    }
    currentQuestion++;
    questionEl.textContent = " ";
    answerEl.textContent = " ";
    answerSelectEl = " ";
    displayQuestion();
  };
  // displays first question
  questionEl.innerText = questionArray[currentQuestion].question;
  //loop through the currentQuestion choices and create a button for each one
  questionArray[currentQuestion].choices.forEach(function (choice) {
    var choiceButton = document.createElement("button");
    choiceButton.classList.add("my-1", "btn", "btn-primary", "w-50");
    choiceButton.innerText = choice;
    choiceButton.onclick = answerSelect;
    answerEl.appendChild(choiceButton);
  });
};

// postScore function after Times up Alert

// high scores link either places / appends scores to page or displays an alert box.
