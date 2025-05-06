// Countdown Timer with Progress Bar
const eventDate = new Date("June 12, 2025 09:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = `${days}d ${hours}h ${minutes}m ${seconds}s`;

    // Update progress bar
    const totalDuration = eventDate - new Date("January 1, 2025").getTime();
    const elapsed = new Date().getTime() - new Date("January 1, 2025").getTime();
    const progress = (elapsed / totalDuration) * 100;
    document.getElementById("progress").style.width = `${progress}%`;

    if (distance < 0) {
        clearInterval(countdownInterval);
        document.getElementById("timer").innerHTML = "The event has started!";
    }
}

const countdownInterval = setInterval(updateCountdown, 1000);

// Handle RSVP form submission
document.getElementById("rsvp-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("name").value;
    const team = document.getElementById("team").value;
    alert(`Thanks for RSVP'ing, ${name} from team ${team}!`);
});

// Poll Handling (Simple Example)
document.getElementById("poll-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const robot = document.getElementById("robot").value;
    document.getElementById("poll-results").innerHTML = `<p>You voted for ${robot}!</p>`;
});

// Dark Mode Toggle
function toggleDarkMode() {
    document.body.classList.toggle("dark-mode");
}
