// API endpoint variable
const jokeApiUrl = 'https://v2.jokeapi.dev/joke/Any?blacklistFlags=nsfw,religious,political,racist,sexist,explicit&type=single';

// Function to fetch a joke from the API
async function getJoke() {
    try {
        // Fetch the joke data
        const response = await fetch(jokeApiUrl);

        // Check if the request was successful
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        // Parse the response data as JSON
        const data = await response.json();

        // Display the joke in the console
        console.log(data.joke);

        // Call the function to display the joke in the HTML
        displayRes(data.joke);
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Failed to fetch a joke. Please try again.');
    }
}

// Function to display the fetched joke in the paragraph element
function displayRes(jokeText) {
    document.getElementById('output').textContent = jokeText;
}

// Event listener for the button click
document.getElementById('jokeBtn').addEventListener('click', getJoke);

// Automatically load a joke when the page loads
window.addEventListener('load', getJoke);
