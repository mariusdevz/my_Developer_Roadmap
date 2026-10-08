
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
        answerContainer.hidden = true
        answerContainer.id = answerId
        answerContainer.classList.add('answer');

        spanArrow.addEventListener('click', () => {
            if (spanArrow.textContent === "▶") {
                answerContainer.hidden = false
                spanArrow.textContent = "▼";
                answerContainer.classList.toggle('answerOpened');
                spanArrow.setAttribute("aria-expanded", "true")
            } else {
                spanArrow.textContent = "▶";
                answerContainer.hidden = true
                answerContainer.classList.toggle('answerOpened');
                spanArrow.setAttribute("aria-expanded", "false")
            }

        })

        spanArrow.addEventListener('keydown', (e) => {
            let focusElement = document.activeElement
            // convert into array
            const buttons = Array.from(mainDisplay.querySelectorAll('button'))
            const currentPosition = buttons.indexOf(focusElement)
            if (e.key === 'ArrowDown') {
                e.preventDefault()
                if (currentPosition === buttons.length - 1) {
                    buttons[0].focus()
                } else {
                    const nextBtn = buttons[currentPosition + 1]
                    nextBtn.focus()
                }
            }

            if (e.key === 'ArrowUp') {
                e.preventDefault()
                if (currentPosition === 0) {
                    const lastBtn = buttons.length - 1;
                    buttons[lastBtn].focus()
                } else {
                    const prevBtn = buttons[currentPosition - 1]
                    prevBtn.focus()
                }
            }
        })


        questionContainer.appendChild(question)
        questionContainer.appendChild(spanArrow)
        mainDisplay.appendChild(answerContainer)
        mainDisplay.appendChild(questionContainer);
    })

}

accordionDisplay()