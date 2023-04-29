const quoteContainer = document.getElementById("quote");
const authorContainer = document.getElementById("author");

window.onload = newQuote;

function newQuote() {
    // fetch ('the url')
    fetch('https://stoic-quotes.com/api/quote')
        // then the result from that api which is res will be converted to json
        .then(res => {
            return res.json();
        })
        // then that data that is converted to json will be passed on as value of quote and author
        .then(data => {
            quoteContainer.innerHTML = `"` + data.text + `"`;
            authorContainer.innerHTML = `- ` + data.author;
        })
        // if there is an error print it out on the screen
        .catch(error => console.log(error));
}
function tweet() {
    const newTweet = `https://twitter.com/intent/tweet?text=${quoteContainer.textContent} ${authorContainer.textContent}`;
    window.open(newTweet, "_blank");
}
