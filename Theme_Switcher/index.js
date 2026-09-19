const swatcher = document.querySelectorAll('.swatch');

swatcher.forEach(swatch => {
    swatch.addEventListener('click', () => {
        const colorEl = swatch.textContent;
        document.body.style.backgroundColor = colorEl

    })
});

//ALL GOOD