const questions = [
    {
        question: 'What does HTML stand for?',
        answer: 'Hyper Text Markup Language'
    },
    {
        question: 'Which CSS property changes the text color?',
        answer: 'color'
    },
    {
        question: 'Which tag is used to create a paragraph in HTML?',
        answer: '<p>'
    },
    {
        question: 'Which JavaScript keyword is used to declare a variable?',
        answer: 'both var and const'
    },
    {
        question: 'What does CSS stand for?',
        answer: 'Cascading Style Sheets'
    }
];

const question = document.getElementById('question');
const answer = document.getElementById('answer');
const showAnswer = document.getElementById('show-answer');
const nextBtn = document.getElementById('next');
const prevBtn = document.getElementById('prev');
const card = document.getElementById('card');
const btnContainer = document.getElementById('btn-container')

let currentCard = 0;
let isClicked = false;

function flashCard() {
    const current = questions[currentCard].question;
    const answered = questions[currentCard].answer;
    question.textContent = current;

    answer.textContent = "";
    showAnswer.textContent = "Show Answer";
    answer.classList.remove('p')
    isClicked = false;

    console.log(currentCard);
    nextBtn.style.display = "block";
    showAnswer.style.display = "block";
}

flashCard();

showAnswer.addEventListener('click', () => {
    if (!isClicked) {
        answer.textContent = questions[currentCard].answer;;
        answer.classList.add('p')
        showAnswer.textContent = "hide";
        isClicked = true;

    } else {
        answer.textContent = "";
        showAnswer.textContent = "Show Answer";
        answer.classList.remove('p')
        isClicked = false;
    }
})


nextBtn.addEventListener('click', () => {
    currentCard++;
    if (currentCard === questions.length) {
        const restart = document.createElement('button');
        const para = document.createElement('p');
        para.textContent = "All Flash cards have been displayed!"
        para.style.color = "gold";
        restart.textContent = 'restart';
        question.innerHTML = "";
        nextBtn.style.display = "none";
        showAnswer.style.display = "none";
        question.appendChild(para);
        btnContainer.appendChild(restart);

        restart.addEventListener('click', () => {
            currentCard = 0
            restart.style.display = "none";
            flashCard();
        });
        return;
    }

    flashCard()
});

// ALL GOOD