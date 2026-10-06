const openModal = document.getElementById('openModal');
const closeX = document.getElementById('closeX');
const modal = document.querySelector('.modal__container');
const focusableElements = modal.querySelectorAll(
    'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
);

let previousFocus;

openModal.addEventListener('click', () => {
    previousFocus = document.activeElement;
    modal.hidden = false;
    closeX.focus()
});
closeX.addEventListener("click", () => {
    modal.hidden = true;
    openModal.focus();
})

modal.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
        modal.hidden = true;
    }
});

modal.addEventListener('keydown', (e) => {
    if (e.key === 'Tab') {
        const firstElement = focusableElements[0];
        const lastElement = focusableElements[focusableElements.length - 1];

        if (e.shiftKey && document.activeElement === firstElement) {
            e.preventDefault();
            lastElement.focus();
        }

        if (!e.shiftKey && document.activeElement === lastElement) {
            e.preventDefault();
            firstElement.focus();
        }
    }
});