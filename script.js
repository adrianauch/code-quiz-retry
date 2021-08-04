// Variables:
var CurrentTime = $("#Time");
var startbtn = $("#start-button"); //also will start time
var questionsArea = $("#quesion-space");
var mainContainer = $("#container");
var possAnswers = $("ul");
var buttonA = $("#A");
var buttonB = $("#B");
var buttonC = $("#C");
var buttonD = $("#D");
var direct = $("#directions");
var printQ = $("print-q");
//Variables for Score

//Global Variables
var score = 0;
var CurrentQuestion = 0;

// Questions
var quizQuestions = [
  {
    title: "What is the rarest m&m color?",
    options: ["Red", "Blue", "Brown", "Yellow"],
    answer: "2",
  },
  {
    title: "What was the first soft drink in space?",
    options: ["Coca-Cola", "Pepsi", "Dr.Pepper", "Gatorade"],
    answer: "0",
  },
  {
    title: "What is the most consumer manufactured drink in the world?",
    options: ["Soft Drinks", "Coffee", "Alcohol", "Tea"],
    answer: "4",
  },
  {
    title: "Where was Hawaiian pizza invented?",
    options: ["Italiy", "Canada", "United States", "United Kingdom"],
    answer: "1",
  },
  {
    title: "How long does it take to grow a pineapple?",
    options: ["3 months", "6 months", "1 year", "3 years"],
    answer: "4",
  },
];

//timer variables:
var timeLeft = 60;
var penalty = -10;

//Start Game
function startGame(event) {
  event.preventDefault();
  startbtn.hide();
  direct.hide();
  coutdown();
  loadQuestions();
}
//timer function
function coutdown() {
  interval = setInterval(function () {
    timeLeft--;
    CurrentTime.textContent = "Time:" + timeLeft;

    if (timeLeft <= 0) {
      clearInterval(interval);
      gameOver();
      CurrentTime.text("Time's Up!");
    }
  }, 1000);
}
//Function to load questions
function loadQuestions() {
  if (timeLeft > 0) {
    printQ.text("question: " + quizQuestions[CurrentQuestion].title);
    var questiontitle = quizQuestions[CurrentQuestion.title];
    printQ.append(questionsArea);
    var choiceA = quizQuestions[CurrentQuestion].options[0];
    var choiceB = quizQuestions[CurrentQuestion].options[1];
    var choiceC = quizQuestions[CurrentQuestion].options[2];
    var choiceD = quizQuestions[CurrentQuestion].options[3];
    buttonA.text(choiceA);
    buttonB.text(choiceB);
    buttonC.text(choiceC);
    buttonD.text(choiceD);
  } else {
    gameOver();
  }
} //function to check answer
function check(event) {
  var pickedAns = event.target;
  if (pickedAns.matches("li")) {
    var newdiv = document.createElement("div");
    newdiv.setAttribute("id", "newdiv");
    if (pickedAns.textContent == quizQuestions[CurrentQuestion].answer) {
      score++;
      newdiv.textContent = "Correct!";
    } else {
      newdiv.textContent =
        "Incorrect! The correct answer is: " +
        quizQuestions[CurrentQuestion].answer;
    }
  }
}
// current question determine which question the user is on (in the array)
//timer section:

function gameOver() {}

//event listener
startbtn.on("click", startGame);
