const swatches = document.querySelectorAll(".swatch");
const color = document.querySelectorAll(".color-swatch");

swatches.forEach(swatch => {
    swatch.addEventListener('click', () => {
        const colorEl = swatch.textContent;
        document.body.style.backgroundColor = colorEl;

        swatch.textContent = "Copied!"

        setTimeout(() => {
            swatch.textContent = colorEl

        }, 1500)
        navigator.clipboard.writeText(colorEl)


    })
})

