const moreQuotes = [
    {
        quote: "The only way to do great work is to love what you do.",
        author: "Steve Jobs"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Buddha"
    },
    {
        quote: "The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart.",
        author: "Helen Keller"
    },
    {
        quote: "Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do.",
        author: "Mark Twain"
    },
    {
        quote: "It is during our darkest moments that we must focus to see the light.",
        author: "Aristotle"
    }
];

const quoteElement = document.getElementById('quote');
const authorElement = document.getElementById('author');
const newQuoteButton = document.getElementById('new-quote-button');

function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = moreQuotes[randomIndex];
    quoteElement.textContent = quote[0];
    authorElement.textContent = quote[1];
}

function getMoreRandomQuote() {
    const randomIndex = Math.floor(Math.random() * moreQuotes.length);
    const otherquote = moreQuotes[randomIndex];

    authorElement.textContent = otherquote.author;
    quoteElement.textContent  = otherquote.quote;

    // authorElement.textContent  = otherquote[1];
    // quoteElement.textContent  = otherquote[0];
}
//     quoteElement.textContent = otherquote[randomIndex].quote;
//     authorElement.textContent = otherquote[randomIndex].author;
// }

newQuoteButton.addEventListener('click', getMoreRandomQuote);

getMoreRandomQuote(); // Call the function on page load to display a random quote