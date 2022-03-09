var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("question");
var answerEl = document.getElementById("answer");
var answerSelectEl = document.getElementById("answer-select");
var startButton = document.getElementById("start");
var welcomeTitle = document.getElementById("welcome-title");
var finalScoreEl = document.getElementById("final-score");
var submitButton = document.querySelector("#submit");
var initialsEl = document.querySelector("#initials");
var highScoreButton = document.querySelector("#scores");
var span = document.getElementsByClassName("close")[0];
var modal = document.querySelector(".modal");
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
// trigger onclick event from start button
function startQuiz() {
  // starts timer to go down by 1 second.
  timerEl.innerText = secondsRemaining;
  timerVal = setInterval(function () {
    // timer displays countdown to 0
    if (secondsRemaining >= 1) {
      secondsRemaining--;
      timerEl.innerText = secondsRemaining;
    } else {
      // alert, stop timer, and run endQuiz function
      alert("Time is Up! Post your initials!");
      clearInterval(timerVal);
      endQuiz();
    }
    // countdown in ms
  }, 1000);
  // removes welcome text/start button, displays question/answers/timer
  welcomeTitle.classList.add("hide");
  startButton.classList.add("hide");
  questionEl.classList.remove("hide");
  answerEl.classList.remove("hide");
  timerEl.classList.remove("hide");
  displayQuestion();
}
// places questionArray to the page starting with [0]
var displayQuestion = function () {
  var questionNumber = questionArray[currentQuestion];
  // displays first question
  questionEl.innerText = questionNumber.question;
  //loop through the currentQuestion choices and create a button for each one
  questionNumber.choices.forEach(function (choices) {
    var choiceButton = document.createElement("button");
    choiceButton.classList.add("my-1", "btn", "btn-primary", "w-50");
    choiceButton.innerText = choices;
    answerEl.appendChild(choiceButton);
    // when a choice button is selected, runs answerSelect function
    choiceButton.onclick = answerSelect;
  });
};
// checks if correct answer was selected
var answerSelect = function () {
  // if it is incorrect take 3 seconds off
  if (this.innerText !== questionArray[currentQuestion].answer) {
    secondsRemaining -= 3;
    timerEl.innerText = secondsRemaining;
    answerSelectEl.textContent = "Wrong";
    // if correct
  } else {
    answerSelectEl.textContent = "Correct";
  }
  // flash feedback on page
  answerSelectEl.setAttribute("class", "feedback");
  setTimeout(function () {
    // hides "Correct" / "Wrong" after 1ms
    answerSelectEl.setAttribute("class", "feedback hide");
  }, 1000);
  // moves to next question in array
  currentQuestion++;
  // clears previous question/answer areas
  questionEl.textContent = " ";
  answerEl.textContent = " ";
  // checks if all questions have been completed
  if (currentQuestion === questionArray.length) {
    endQuiz();
  } else {
    displayQuestion();
  }
};
// stops timer and posts to page content
var endQuiz = function () {
  clearInterval(timerVal);
  questionEl.textContent = "Your score is: " + secondsRemaining;
  // displays initials input / submit score button
  finalScoreEl.classList.remove("hide");
};
// submit button onclick saves to localStorage
var saveScore = function () {
  // trims white space around entry
  var initials = initialsEl.value.trim();
  // checks for empty input
  if (initials !== "") {
    // variable that parses highscore and makes an array
    var highscore = JSON.parse(localStorage.getItem("highscore")) || [];
    // with the score and their input initials saved as an object
    var userScore = {
      score: secondsRemaining,
      initials: initials,
    };
    // save to localStorage
    highscore.push(userScore);
    localStorage.setItem("highscore", JSON.stringify(highscore));
  }
  // clear out initials input and reload page to try again after 2 secs
  initialsEl.value = "";
  setTimeout(function () {
    window.location.reload("./index.html");
  }, 2);
};
// High Scores link displays modal
highScoreButton.onclick = function () {
  modal.style.display = "block";
  // get scores from localstorage
  var highscore = JSON.parse(window.localStorage.getItem("highscore")) || [];
  // arrange scores in order from highest to lowest
  highscore.sort(function (a, b) {
    return b.score - a.score;
  });
  highscore.forEach(function (score) {
    // create list item for each high score
    var listItem = document.createElement("li");
    listItem.textContent = score.initials + ": " + score.score;

    // display on the page
    var list = document.querySelector(".modal-body");
    list.appendChild(listItem);
  });
};
// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};
// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};
// Start Quiz button event listener
startButton.addEventListener("click", startQuiz);
