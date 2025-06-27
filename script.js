const quotes = [
  {
    quote: "The best way to get started is to quit talking and begin doing.",
    author: "Walt Disney"
  },
  {
    quote: "Don’t let yesterday take up too much of today.",
    author: "Will Rogers"
  },
  {
    quote: "It’s not whether you get knocked down, it’s whether you get up.",
    author: "Vince Lombardi"
  },
  {
    quote: "Success is not in what you have, but who you are.",
    author: "Bo Bennett"
  },
  {
    quote: "Believe you can and you're halfway there.",
    author: "Theodore Roosevelt"
  }
];
function generateQuote() {
  

const author1 = document.querySelector("#author");
const quote1 = document.querySelector("#quote");
const btn = document.querySelector("#btn");

let randomNum = Math.floor(Math.random()*5)

let randomquote = quotes[randomNum].quote
quote1.innerText = randomquote;

let randomauthor = quotes[randomNum].author
author1.innerText = randomauthor;

btn.addEventListener("click", function 
  () {
  btn.innerHTML = "Next"
})
}
