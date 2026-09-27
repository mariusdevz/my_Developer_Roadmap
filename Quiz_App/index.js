
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
const optionContainer = document.getElementById('options');
const scoreIntel = document.getElementById('scoreIntel');
const headerContainer = document.getElementById('header-container')
const result = document.getElementById('result');

let currentQuestion = 0;
let score = 0



function Question() {
    optionContainer.textContent = ""

    if (currentQuestion === questions.length) {
        questionContainer.textContent = `Quiz Complete!
                                        You Scored ${score} / ${questions.length}`;
        questionContainer.classList.add('complete');
        headerContainer.innerHTML = ""
        const restart = document.createElement('button');
        restart.textContent = 'restart Quiz!';
        restart.classList.add('restart')
        result.appendChild(restart);
        restart.addEventListener('click', () => {
            currentQuestion = 0;
            score = 0;
            result.innerHTML = ""
            Question();
        })
    }

    const current = questions[currentQuestion].question;

    questionContainer.textContent = current;
    questionContainer.classList.add('li');
    const optionQuestion = questions[currentQuestion].options;
    const answerQuestion = questions[currentQuestion].answer;


    optionQuestion.forEach(option => {
        const optionText = document.createElement('div');
        optionText.textContent = option;
        optionContainer.appendChild(optionText);
        optionText.classList.add('option');

        optionText.addEventListener('click', () => {
            if (option === answerQuestion) {
                optionText.classList.add('success');
                score++;
                scoreIntel.textContent = `Score: ${score} / ${questions.length}`;
                currentQuestion++;
            } else {
                optionText.classList.add('error')
                currentQuestion++;
            }

            Question();

        })



    })




    scoreIntel.textContent = `Score: ${score} / ${questions.length}`;


}

Question()
