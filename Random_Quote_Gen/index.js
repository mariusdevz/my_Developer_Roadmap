const quotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "Success is not final, failure is not fatal.",
        author: "Winston Churchill"
    },
    {
        quote: "Stay hungry, stay foolish.",
        author: "Steve Jobs"
    }
];

const listQuotes = document.getElementById('quotes');
const listAuthors = document.getElementById('author')
const genBtn = document.getElementById('gen');

let randomIndex = Math.floor(Math.random() * quotes.length);

function generate() {
    randomIndex = Math.floor(Math.random() * quotes.length)
    const quoted = quotes[randomIndex].quote
    const authored = quotes[randomIndex].author
    listQuotes.textContent = quoted;
    listAuthors.textContent = authored;
}

genBtn.addEventListener('click', () => {
    generate()
    // console.log('clicked');

})

// ALL GOOD
