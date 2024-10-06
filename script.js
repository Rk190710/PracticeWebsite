// Array of random links (replace with your desired links)
const randomLinks = [
    'https://example.com',
];

// Function to go to a random link
function goToRandomLink() {
    const randomIndex = Math.floor(Math.random() * randomLinks.length);
    window.location.href = randomLinks[randomIndex];
}

// Add event listener to the ad area
document.getElementById('random-ad').addEventListener('click', goToRandomLink);
