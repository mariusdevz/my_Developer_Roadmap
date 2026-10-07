
const accordion = [
    {
        question: "What is JavaScript?",
        answer: "A versatile, high-level programming language. It runs directly in the browser to handle dynamic content, animations, and user interactions."
    },
    {
        question: "What is React?",
        answer: "A popular, open-source JavaScript library developed by Meta (Facebook). It is used specifically for building user interfaces (UIs) out of reusable components."
    },
    {
        question: "What is accessibility?",
        answer: "Often abbreviated as a11y, this is the practice of designing and developing digital products so that everyone—including people with visual, auditory, motor, or cognitive disabilities—can use them."
    }
]

const mainDisplay = document.getElementById('main')

function accordionDisplay() {
    accordion.forEach((acc, index) => {
        const questionContainer = document.createElement('div');
        const question = document.createElement('span');
        const spanArrow = document.createElement('button');
        const answerContainer = document.createElement('div');

        spanArrow.textContent = "▶"
        spanArrow.setAttribute("aria-expanded", "false")
        question.textContent = acc.question;
        questionContainer.classList.add('question')
        const answerId = `answer-${index}`;
        spanArrow.setAttribute('aria-controls', answerId)


        answerContainer.textContent = acc.answer;
        answerContainer.id = answerId
        answerContainer.classList.add('answer');

        spanArrow.addEventListener('click', () => {
            if (spanArrow.textContent === "▶") {
                spanArrow.textContent = "▼";
                answerContainer.classList.toggle('answerOpened');
                spanArrow.setAttribute("aria-expanded", "true")
            } else {
                spanArrow.textContent = "▶";
                answerContainer.classList.toggle('answerOpened');
                spanArrow.setAttribute("aria-expanded", "false")
            }

        })

        questionContainer.appendChild(question)
        questionContainer.appendChild(spanArrow)
        mainDisplay.appendChild(answerContainer)
        mainDisplay.appendChild(questionContainer);
    })
}

accordionDisplay()