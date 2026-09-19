const inputEl = document.getElementById('input');
const charactersEl = document.getElementById('characters');

inputEl.addEventListener('input', () => {
    const text = inputEl.value;
    charactersEl.textContent = `${text.length}`;
})
