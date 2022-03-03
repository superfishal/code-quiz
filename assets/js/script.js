var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");
var choices1El = document.getElementById("ans1");
var choices2El = document.getElementById("ans2");
var choices3El = document.getElementById("ans3");
var choices4El = document.getElementById("ans4");
var startButton = document.getElementById("start");
var welcomeTitle = document.getElementById("welcome-title");

var questionArray = [
  {
    question:
      "Cheese on toast cow swiss. Boursin babybel cut the cheese rubber cheese ricotta melted cheese parmesan bavarian bergkase?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 2",
  },
  {
    question: "Question 2",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer 3",
  },
];

startButton.addEventListener("click", startQuiz);

function startQuiz() {
  //   start & display timer
  welcomeTitle.classList.add("hide");
  startButton.classList.add("hide");
  questionEl.classList.remove("hide");
  answerEl.classList.remove("hide");
  //  display question 1
}
