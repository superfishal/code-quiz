var timerEl = document.getElementById("countdown");
var questionEl = document.getElementById("question");
var choices1El = document.getElementById("ans1");
var choices2El = document.getElementById("ans2");
var choices3El = document.getElementById("ans3");
var choices4El = document.getElementById("ans4");

var questionArray = [
  {
    question:
      "Cheese on toast cow swiss. Boursin babybel cut the cheese rubber cheese ricotta melted cheese parmesan bavarian bergkase?",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer2",
  },
  {
    question: "Question 2",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    answer: "Answer3",
  },
];

function countdown() {
  var timeLeft = 5;

  var timeInterval = setInterval(function () {
    // As long as the `timeLeft` is greater than 1
    if (timeLeft > 1) {
      // Set the `textContent` of `timerEl` to show the remaining seconds
      timerEl.textContent = timeLeft + " seconds remaining";
      // Decrement `timeLeft` by 1
      timeLeft--;
    } else if (timeLeft === 1) {
      // When `timeLeft` is equal to 1, rename to 'second' instead of 'seconds'
      timerEl.textContent = timeLeft + " second remaining";
      timeLeft--;
    } else {
      // Once `timeLeft` gets to 0
      timerEl.textContent = "TIMES UP";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `endQuiz()` function
      // endQuiz();
      // need an endQuiz function when timer runs out
      // $(".hide").addClass("hide") add to start button -> change to submit (high scores / initials)?
    }
  }, 1000);
}

// form and storage
var submitQuiz = document.querySelector("submit");
submitQuiz.addEventListener("click", function (event) {
  event.preventDefault();
  // create user object from submission
  var user = {
    userName: userNameInput.value.trim(),
    // score
  };

  // set new submission to local storage
  localStorage.setItem("user", JSON.stringify(user));
});

var questionNumber = 0;
if (questionArray[questionNumber] === undefined) {
  questionEl.textContent = "You Completed The Quiz in time!";
} else {
  questionEl.textContent = questionArray.question[questionNumber];
  choicesEl.textContent = questionArray.choices[questionNumber];
  questionNumber++;
}

// need a selectAnswer function for result and push to next question
// function selectAnswer(questionNumber, questionArray) {
//   console.log(questionArray[questionNumber].choices[0]);
//   for (i = 0; 1 < 3; i++) {
//     $("#ans1").textContent = questionArray[questionNumber].choices[0];
//     $("#ans2").textContent = questionArray[questionNumber].choices[1];
//     $("#ans3").textContent = questionArray[questionNumber].choices[2];
//     $("#ans4").textContent = questionArray[questionNumber].choices[3];
//   }
// }

// $( "#myDiv" ).css( "border", "3px solid red" );
// var $yourUl = $("#question");
// $yourUl.css("display", $yourUl.css("display") === "none" ? "" : "none");

function startQuiz() {
  console.log("quiz has begun");
  $(".hide").removeClass("hide");
}
// start button event listener
$("#start").click(startQuiz);

countdown();
