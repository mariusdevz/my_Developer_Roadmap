const search = document.getElementById('input');

let timer;
let controller;

search.addEventListener('input', () => {
    if (controller) {
        controller.abort()
    }
    controller = new AbortController();

    clearTimeout(timer);

    timer = setTimeout(async () => {
        try {
            const inputSearch = search.value;
            const url = `https://api.github.com/search/users?q=${inputSearch}`
            const response = await fetch(url, {
                signal: controller.signal
            })
            const data = await response.json()
            console.log(data.items);
        } catch (error) {
            if (error.name === "AbortError") {
                return;
            } else {
                console.log(error);

            }
        }

    }, 500)

})

