// Countdown Timer
const eventDate = new Date("June 12, 2025 09:00:00").getTime();

function updateCountdown() {
    const now = new Date().getTime();
    const distance = eventDate - now;

    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("timer").innerHTML = days + "d " + hours + "h " + minutes + "m " + seconds + "s ";

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

// Handle Poll form submission
document.getElementById("poll-form").addEventListener("submit", function(event) {
    event.preventDefault();
    const robot = document.getElementById("robot").value;
    alert(`Thanks for voting for ${robot}!`);
});
