const loadQoutes = () => {
    fetch('https://api.kanye.rest')
    .then(rest => rest.json())
    .then(data => displayQuote(data));
};


const displayQuote = (quote) => {
    const quoteElement = document.getElementById('quote');
    quoteElement.innerText = quote.quote;
}