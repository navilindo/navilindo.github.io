const quotes = [
    ["The only way to do great work is to love what you do. - Steve Jobs"],
    ["The mind is everything. What you think you become. - Buddha"],
    ["The best and most beautiful things in the world cannot be seen or even touched - they must be felt with the heart. - Helen Keller"],
    ["Twenty years from now you will be more disappointed by the things that you didn't do than by the ones you did do. - Mark Twain"],
    ["It is during our darkest moments that we must focus to see the light. - Aristotle"]
  ];

  const quoteElement = document.getElementById('quote');
  const authorElement = document.getElementById('author');
  const newQuoteButton = document.getElementById('new-quote-button');
  
  function getRandomQuote() {
    const randomIndex = Math.floor(Math.random() * quotes.length);
    const quote = quotes[randomIndex];
    quoteElement.textContent = quote[0];
    authorElement.textContent = quote[1];
  }

  newQuoteButton.addEventListener('click', getRandomQuote);
  
  getRandomQuote(); // Call the function on page load to display a random quote
