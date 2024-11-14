// Function to get a random comic number between 1 and 3000
function getRandomComicNumber() {
    return Math.floor(Math.random() * 3000) + 1;
}

// Function to fetch and display a random XKCD comic
async function fetchComic() {
    const comicNumber = getRandomComicNumber();
    const apiUrl = `https://corsproxy.io/?https://xkcd.com/${comicNumber}/info.0.json`;

    try {
        // Fetch the comic data
        const response = await fetch(apiUrl);

        // Check if the response is ok
        if (!response.ok) {
            throw new Error('Network response was not ok');
        }

        const data = await response.json();

        // Display the comic data
        displayComic(data);
    } catch (error) {
        console.error('Fetch error:', error);
        alert('Failed to fetch the comic. Please try again.');
    }
}

// Function to display comic details in the HTML
function displayComic(comicData) {
    document.getElementById('comic-title').textContent = comicData.title;
    document.getElementById('comic-img').src = comicData.img;
    document.getElementById('comic-img').alt = comicData.alt;
    document.getElementById('comic-alt').textContent = comicData.alt;

    // Format the date in the form of "Published on: YYYY-MM-DD"
    const publishDate = `${comicData.year}-${comicData.month.padStart(2, '0')}-${comicData.day.padStart(2, '0')}`;
    document.getElementById('comic-date').textContent = `Published on: ${publishDate}`;
}

// Event listener for the button click to get a new comic
document.getElementById('comicBtn').addEventListener('click', fetchComic);

// Automatically load a comic on page load
window.addEventListener('load', fetchComic);
