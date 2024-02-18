const quotes = [
    {
        quote: "When you have faults, do not fear to abandon them.",
        author: "Confucius",
    },
    {
        quote: "They must often change who would be constant in happiness or wisdom.",
        author: "Confucius",
    },
    {
        quote: "Age is no guarantee of maturity.",
        author: "Lawana Blackwell",
    },
    {
        quote: "You will face many defeats in life, but never let yourself be defeated.",
        author: "Maya Angelou",
    },
    {
        quote: "The greatest glory in living lies not in never falling, but in rising every time we fall.",
        author: "Nelson Mandela",
    },
    {
        quote: "Life is either a daring adventure or nothing at all.",
        author: "Helen Keller",
    },
    {
        quote: "This too shall pass.",
        author: "Et hoc transibit",
    },
    {
        quote: "All you need in this life is ignorance and confidence, then success is sure.",
        author: "Mark Twain",
    },
    {
        quote: "Life is a mountain. Your goal is to find your path, not to reach the top.",
        author: "Maxime Lagacé",
    },
    {
        quote: "Life is from the inside out. When you shift on the inside, life shifts on the outside.",
        author: "Kamal Ravikant",
    }
];

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = todaysQuote.quote;
author.innerText = `- ${todaysQuote.author}`;