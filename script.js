// Variables:
var CurrentTime = $("#Time");
var startbtn = $("#start-button"); //also will start time
var questionsArea = $("#quesion-space");
var mainContainer = $("#container");
var possAnswers = $("ul");
//Variables for Score

//Global Variables
var score = 0;
var CurrentQuestion = 0;

// Questions
var quizQuestions = [
  {
    title: "What is the rarest m&m color?",
    options: ["Red", "Blue", "Brown", "Yellow"],
    answer: "Brown",
  },
  {
    title: "What was the first soft drink in space?",
    options: ["Coca-Cola", "Pepsi", "Dr.Pepper", "Gatorade"],
    answer: "Coca-Cola",
  },
  {
    title: "What is the most consumer manufactured drink in the world?",
    options: ["Soft Drinks", "Coffee", "Alcohol", "Tea"],
    answer: "Tea",
  },
  {
    title: "Where was Hawaiian pizza invented?",
    options: ["Italiy", "Canada", "United States", "United Kingdom"],
    answer: "Canada",
  },
  {
    title: "How long does it take to grow a pineapple?",
    options: ["3 months", "6 months", "1 year", "3 years"],
    answer: "3 years",
  },
];

//Function to load questions
function loadQuestions() {
  questionsArea.text("");
  possAnswers.text("");

  for (var i = 0; i < quizQuestions.length; i++) {
    var dispQuestion = quizQuestions[CurrentQuestion].title;
    var dispOptions = quizQuestions[CurrentQuestion].choices;
    questionsArea.text(dispQuestion);
  }
  dispOptions.forEach(function (newItem) {
    var optionItem = document.createElement("li");
    optionItem.text(newItem);
    possAnswers.append(optionItem);
    optionItem.on("click", check);
  });
}
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
