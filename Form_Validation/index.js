const nameEl = document.getElementById('name');
const emailEl = document.getElementById('email');
const passwordEl = document.getElementById('password');
const confirmEl = document.getElementById('confirm');
const errorEl = document.querySelectorAll('.error')
const btn = document.getElementById('btn');

btn.addEventListener('click', (e) => {
    e.preventDefault();
    const nameInput = nameEl.value.trim();
    const emailInput = emailEl.value;
    const passwordInput = passwordEl.value;
    const confirmEl = confirmEl.value;

})
