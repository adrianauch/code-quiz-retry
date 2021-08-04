// Variables:
var CurrentTime = $("#Time");
var startbtn = $("#start-button"); //also will start time
var questionsimpt = $("#quesion-space");
var mainContainer = $("#container");

//Variables for Score

// Questions
var questions = [
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
