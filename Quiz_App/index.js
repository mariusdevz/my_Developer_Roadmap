
const questions = [
    {
        question: 'What does HTML stand for?',
        options: ['Hyper Text Markup Language', 'HighText Machine Language', 'Home Tool Markup Language', 'Hyperlink and Text Markup Logic'],
        answer: 'Hyper Text Markup Language'
    },
    {
        question: 'Which CSS property changes the text color?',
        options: ['font-size', 'color', 'background', 'margin'],
        answer: 'color'
    },
    {
        question: 'Which tag is used to create a paragraph in HTML?',
        options: ['<p>', '<para>', '<paragraph>', '<text>'],
        answer: '<p>'
    },
    {
        question: 'Which JavaScript keyword is used to declare a variable?',
        options: ['var', 'define', 'const', 'both var and const'],
        answer: 'both var and const'
    },
    {
        question: 'What does CSS stand for?',
        options: ['Cascading Style Sheets', 'Computer Style Syntax', 'Creative Style System', 'Coding Style Setup'],
        answer: 'Cascading Style Sheets'
    }
];

const questionContainer = document.getElementById('question-container');
const optionContainer = document.getElementById('options')

let currentQuestion = 0;

function nextQuestion() {
    const current = questions[currentQuestion].question;
    questionContainer.textContent = current;
    questionContainer.classList.add('li');


}

nextQuestion()