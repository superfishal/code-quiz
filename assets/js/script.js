var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");
// var choices1El = document.getElementById("ans1");
// var choices2El = document.getElementById("ans2");
// var choices3El = document.getElementById("ans3");
// var choices4El = document.getElementById("ans4");
var startButton = document.getElementById("start");
var welcomeTitle = document.getElementById("welcome-title");
var timerVal;
var secondsRemaining = 20;
var currentQuestion = 0;

var questionArray = [
  {
    question:
      "Cheese on toast cow swiss. Boursin babybel cut the cheese rubber cheese ricotta melted cheese parmesan bavarian bergkase?",
    choices: ["Chedder", "Brie", "Obechon", "Comte"],
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

function displayQuestion() {
  questionEl.innerText = questionArray[currentQuestion].question;
  //loop through the currentQuestion choices and create a button for each one
  questionArray[currentQuestion].choices.forEach(function (choice) {
    var choiceButton = document.createElement("button");
    choiceButton.classList.add("my-1", "btn", "btn-primary", "w-50");
    choiceButton.innerText = choice;
    answerEl.appendChild(choiceButton);
  });
}
console.log(questionArray[1].answer);
// correctAnswer and wrongAnswer function or one with an if else statement...

// postScore function after Times up Alert

// high scores link either places / appends scores to page or displays an alert box.
