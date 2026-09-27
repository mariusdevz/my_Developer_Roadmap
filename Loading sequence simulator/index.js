const first = document.getElementById('first');
const second = document.getElementById('second');
const third = document.getElementById('third');
const fourth = document.getElementById('fourth');
const completed = document.getElementById('completed');
const startBtn = document.getElementById('start');

startBtn.addEventListener('click', () => {
    setTimeout(() => {
        first.textContent = "starting..."
        setTimeout(() => {
            first.textContent = "Loading user data..."
            setTimeout(() => {
                first.textContent = "Loading posts..."
                setTimeout(() => {
                    first.textContent = "Preparing user interface..."
                    setTimeout(() => {
                        first.textContent = "Loading complete."
                    }, 1000);
                }, 1000);
            }, 1000);
        }, 1000);
    }, 1000);

})

// ALL GOOD