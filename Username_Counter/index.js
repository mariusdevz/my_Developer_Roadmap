const userName = document.getElementById("name");
const countEl = document.getElementById("count");

userName.addEventListener('input', () => {
    const text = userName.value;
    countEl.textContent = text.length;
    if (text.length >= 15) {
        countEl.textContent = "Maximum characters reached";
        countEl.style.color = "red"
    }
})
// ALL GOOD!