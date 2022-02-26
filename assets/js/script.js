var questionNumber = 0;
questionArray = [
  {
    question: "Question 1",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    Answer: "Answer2",
  },
  {
    question: "Question 2",
    choices: ["Answer 1", "Answer 2", "Answer 3", "Answer 4"],
    Answer: "Answer3",
  },
];
var timerEl = $("#countdown");

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
      // Once `timeLeft` gets to 0, set `timerEl` to an empty string
      timerEl.textContent = "";
      // Use `clearInterval()` to stop the timer
      clearInterval(timeInterval);
      // Call the `endQuiz()` function
      endQuiz();
    }
  }, 1000);
  console.log(timeLeft);
}
// need a endQuiz function when timer runs out
// $(".hide").addClass("hide") to start button and change to submit?

function startQuiz() {
  console.log("quiz has begun");
  $(".hide").removeClass("hide");
}
// start button event listener
$("#start").click(startQuiz);

// var $yourUl = $("#question");
// $yourUl.css("display", $yourUl.css("display") === "none" ? "" : "none");

// need a selectAnswer function for result and push to next question
function nextQuestion(questionNumber, questionArray) {
  console.log(questionArray[questionNumber].choices[0]);
  for (i = 0; 1 < 3; i++) {
    $("#ans1").textContent = questionArray[questionNumber].choices[0];
    $("#ans2").textContent = questionArray[questionNumber].choices[1];
    $("#ans3").textContent = questionArray[questionNumber].choices[2];
    $("#ans4").textContent = questionArray[questionNumber].choices[3];
  }
}

$(".question");
$("#answers");

//event listeners

countdown();
