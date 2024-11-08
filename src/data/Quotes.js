/* returns a random quote */
export default function getQuote() {
    const idx = Math.floor(Math.random() * 10);
    return quotes_data[idx];
}

const quotes_data = [
    {
        "id": 1,
        "quote": "The only limit to our realization of tomorrow is our doubts of today.",
        "author": "Franklin D. Roosevelt"
    },
    {
        "id": 2,
        "quote": "In the end, it's not the years in your life that count. It's the life in your years.",
        "author": "Abraham Lincoln"
    },
    {
        "id": 3,
        "quote": "To be yourself in a world that is constantly trying to make you something else is the greatest accomplishment.",
        "author": "Ralph Waldo Emerson"
    },
    {
        "id": 4,
        "quote": "The purpose of our lives is to be happy.",
        "author": "Dalai Lama"
    },
    {
        "id": 5,
        "quote": "Life is what happens when you're busy making other plans.",
        "author": "John Lennon"
    },
    {
        "id": 6,
        "quote": "Get busy living or get busy dying.",
        "author": "Stephen King"
    },
    {
        "id": 7,
        "quote": "You only live once, but if you do it right, once is enough.",
        "author": "Mae West"
    },
    {
        "id": 8,
        "quote": "Many of life's failures are people who did not realize how close they were to success when they gave up.",
        "author": "Thomas A. Edison"
    },
    {
        "id": 9,
        "quote": "If you want to live a happy life, tie it to a goal, not to people or things.",
        "author": "Albert Einstein"
    },
    {
        "id": 10,
        "quote": "Never let the fear of striking out keep you from playing the game.",
        "author": "Babe Ruth"
    }
];
