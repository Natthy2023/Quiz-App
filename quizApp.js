const questions = [
  {
    question: 'What does HTML stand for?',
    answers: [
      { text: 'Hyper Text Markup Language', correct: true },
      { text: 'Home Tool Markup Language', correct: false },
      { text: 'Hyperlinks and Text Markup Language', correct: false },
      { text: 'Hyper Transfer Markup Language', correct: false }
    ]
  },
  {
    question: 'Which element is used to create a hyperlink in HTML?',
    answers: [
      { text: '&lt;link&gt;', correct: false },
      { text: '&lt;a&gt;', correct: true },
      { text: '&lt;href&gt;', correct: false },
      { text: '&lt;url&gt;', correct: false }
    ]
  },
  {
    question: 'Which property is used to change text color in CSS?',
    answers: [
      { text: 'text-color', correct: false },
      { text: 'font-color', correct: false },
      { text: 'color', correct: true },
      { text: 'textStyle', correct: false }
    ]
  },
  {
    question: 'What does CSS stand for?',
    answers: [
      { text: 'Creative Style Sheets', correct: false },
      { text: 'Cascading Style Sheets', correct: true },
      { text: 'Colorful Style Sheets', correct: false },
      { text: 'Computer Style Sheets', correct: false }
    ]
  },
  {
    question: 'Which language is used to add interactivity to a website?',
    answers: [
      { text: 'HTML', correct: false },
      { text: 'CSS', correct: false },
      { text: 'JavaScript', correct: true },
      { text: 'SQL', correct: false }
    ]
  },
  {
    question: 'Which element is used to display an image in HTML?',
    answers: [
      { text: '&lt;pic&gt;', correct: false },
      { text: '&lt;img&gt;', correct: true },
      { text: '&lt;src&gt;', correct: false },
      { text: '&lt;image&gt;', correct: false }
    ]
  },
  {
    question: 'Which symbol is used for IDs in CSS?',
    answers: [
      { text: '.', correct: false },
      { text: '#', correct: true },
      { text: '@', correct: false },
      { text: '&', correct: false }
    ]
  },
  {
    question: 'What is the default HTTP method when submitting a form without specifying one?',
    answers: [
      { text: 'GET', correct: true },
      { text: 'POST', correct: false },
      { text: 'PUT', correct: false },
      { text: 'DELETE', correct: false }
    ]
  },
  {
    question: 'Which of the following is a frontend framework?',
    answers: [
      { text: 'Node.js', correct: false },
      { text: 'Laravel', correct: false },
      { text: 'React', correct: true },
      { text: 'Django', correct: false }
    ]
  },
  {
    question: 'Which HTML element is used to define a table row?',
    answers: [
      { text: '&lt;td&gt;', correct: false },
      { text: '&lt;th&gt;', correct: false },
      { text: '&lt;tr&gt;', correct: true },
      { text: '&lt;table&gt;', correct: false }
    ]
  },
  {
    question: 'Which language is primarily used for styling web pages?',
    answers: [
      { text: 'HTML', correct: false },
      { text: 'Python', correct: false },
      { text: 'CSS', correct: true },
      { text: 'Java', correct: false }
    ]
  },
  {
    question: 'Which of the following is a JavaScript framework?',
    answers: [
      { text: 'React', correct: true },
      { text: 'Laravel', correct: false },
      { text: 'Django', correct: false },
      { text: 'Flask', correct: false }
    ]
  },
  {
    question: 'Which symbol is used for single-line comments in JavaScript?',
    answers: [
      { text: '//', correct: true },
      { text: '/*', correct: false },
      { text: '#', correct: false },
      { text: '&lt;!--', correct: false }
    ]
  },
  {
    question: 'Which data structure uses First In First Out (FIFO) principle?',
    answers: [
      { text: 'Stack', correct: false },
      { text: 'Queue', correct: true },
      { text: 'Array', correct: false },
      { text: 'Tree', correct: false }
    ]
  },
  {
    question: 'Which of the following is not a programming language?',
    answers: [
      { text: 'Python', correct: false },
      { text: 'Java', correct: false },
      { text: 'HTML', correct: true },
      { text: 'C++', correct: false }
    ]
  },
  {
    question: 'Which keyword is used to declare a constant in JavaScript?',
    answers: [
      { text: 'var', correct: false },
      { text: 'let', correct: false },
      { text: 'const', correct: true },
      { text: 'static', correct: false }
    ]
  },
  {
    question: 'Which method is commonly used to print output to the browser console in JavaScript?',
    answers: [
      { text: 'console.log()', correct: true },
      { text: 'echo()', correct: false },
      { text: 'printf()', correct: false },
      { text: 'System.out.println()', correct: false }
    ]
  },
  {
    question: 'Which of the following is a back-end programming language?',
    answers: [
      { text: 'HTML', correct: false },
      { text: 'CSS', correct: false },
      { text: 'Python', correct: true },
      { text: 'Bootstrap', correct: false }
    ]
  },
  {
    question: 'What does the &lt;br&gt; tag in HTML do?',
    answers: [
      { text: 'Makes text bold', correct: false },
      { text: 'Inserts a horizontal line', correct: false },
      { text: 'Creates a line break', correct: true },
      { text: 'Adds space between elements', correct: false }
    ]
  },
  {
    question: 'Which HTML element is used for creating an ordered list?',
    answers: [
      { text: '&lt;ul&gt;', correct: false },
      { text: '&lt;ol&gt;', correct: true },
      { text: '&lt;li&gt;', correct: false },
      { text: '&lt;list&gt;', correct: false }
    ]
  }
];


const questionElement = document.getElementById('question');
const answerButtons = document.getElementById('answer-buttons');
const nextButton = document.getElementById('next-btn');

let currentQuestionIndex = 0;
let score = 0;

function startQuiz() {
  currentQuestionIndex = 0;
  score = 0;
  nextButton.innerHTML = 'Next';
  showQuestion();
}

function showQuestion() {
  resetState();
  let currentQuestion = questions[currentQuestionIndex];
  let questionNo = currentQuestionIndex + 1;
  questionElement.innerHTML = questionNo + '.' + currentQuestion.question;

  currentQuestion.answers.forEach((answer) => {
    const button = document.createElement('button');
    button.innerHTML = answer.text;
    button.classList.add('btn');
    answerButtons.appendChild(button);
    if (answer.correct) {
      button.dataset.correct = answer.correct;
    }
    button.addEventListener('click', selectAnswer);
  });
}
showQuestion();

function resetState() {
  nextButton.style.display = 'none';
  while (answerButtons.firstChild) {
    answerButtons.removeChild(answerButtons.firstChild);
  }
}
function selectAnswer(e) {
  const selectedBtn = e.target;
  const isCorrect = selectedBtn.dataset.correct === 'true';

  if (isCorrect) {
    selectedBtn.classList.add('correct');
    score++;
  } else {
    selectedBtn.classList.add('incorrect');
  }

  Array.from(answerButtons.children).forEach((button) => {
    if (button.dataset.correct === 'true') {
      button.classList.add('correct');
    }
    button.disabled = true;
  });
  nextButton.style.display = "block";
}
function showScore(){
  resetState();
  questionElement.innerHTML = `You scored ${score} out of ${questions.length}!`;
  nextButton.innerHTML = "Play Again";
  nextButton.style.display = "block";
}

function handleNextButton(){
  currentQuestionIndex++;
  if(currentQuestionIndex < questions.length){
    showQuestion();
  }else{
    showScore();
  }
}

nextButton.addEventListener("click",()=>{
  if(currentQuestionIndex < questions.length){
    handleNextButton();
  }else{
    startQuiz();
  }
})
startQuiz();
