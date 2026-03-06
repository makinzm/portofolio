const greetingText = document.getElementById('ai-greeting');
const indicator = document.querySelector('.typing-indicator');

const textToType = '> Initializing portfolio... \n> Hello World.';
let i = 0;

function typeWriter() {
    if (i < textToType.length) {
        if (textToType.charAt(i) === '\n') {
            greetingText.innerHTML += '<br/>';
        } else {
            greetingText.innerHTML += textToType.charAt(i);
        }
        i++;
        setTimeout(typeWriter, Math.random() * 50 + 50); // random delay 50-100ms
    } else {
        // Hide cursor when done typing if desired, or keep blinking
        setTimeout(() => {
            indicator.style.visibility = 'visible';
        }, 1000);
    }
}

// Start typing effect on load
window.addEventListener('load', () => {
    setTimeout(typeWriter, 500);
});

// Smooth scrolling for navigation
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
