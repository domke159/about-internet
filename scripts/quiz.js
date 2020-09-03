
// variable to keep track of current question
var currentQuestion = 0;
// variable to keep track of score
var score = 0;
// number of questions
var totalQuestions = questions.length;

// get needed variables
var container = document.getElementById('quiz-container');
var questionElement = document.getElementById('question');
var option1 = document.getElementById('option1');
var option2 = document.getElementById('option2');
var option3 = document.getElementById('option3');
var option4 = document.getElementById('option4');
var nextButton = document.getElementById('next-button');
var resultContainer = document.getElementById('quiz-result');
var resultText = document.getElementById("result-text");

// function to "load the question"
function loadQuestion(questionIndex) {
  var q = questions[questionIndex];
  // display the question with options
  questionElement.textContent = (questionIndex + 1) + '. ' + q.question;
  option1.textContent = q.option1;
  option2.textContent = q.option2;
  option3.textContent = q.option3;
  option4.textContent = q.option4;
}

// function to "build" the next question
function nextQuestion() {
  // get selected option
  var selectedOption = document.querySelector('input[type=radio]:checked');
  // if the user has not selected anything inform with a message
  if(!selectedOption) {
    alert('Please select one of the answers.');
    return;
  }
  // if the answers is correct increase the score
  var answer = selectedOption.value;
  if(questions[currentQuestion].answer == answer) {
    score++;
  }
  selectedOption.checked = false;
  currentQuestion++;
  // if it is the last question
  if(currentQuestion == totalQuestions - 1) {
    nextButton.textContent = 'Finish';
  }
  // display the results
  if(currentQuestion == totalQuestions) {
    container.style.display = 'none';
    resultContainer.style.display = 'block';
    resultText.textContent = 'Your score: ' + score + '/5';
    return;
  }
  // load next question
  loadQuestion(currentQuestion);
}

// load the first question
loadQuestion(currentQuestion);

// function to allow the user to try again
function tryAgain() {
  nextButton.textContent = 'Next Question';
  // reset the variables
  currentQuestion = 0;
  score = 0;
  // make the result section visible
  container.style.display = 'block';
  resultContainer.style.display = 'none';
  // laod the question
  loadQuestion(currentQuestion);
}