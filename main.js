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

// Modal Logic
document.querySelectorAll('.modal-trigger').forEach(trigger => {
    trigger.addEventListener('click', () => {
        const modalId = trigger.getAttribute('data-target');
        const modal = document.getElementById(modalId);
        if (modal) {
            modal.showModal();
        }
    });
});

document.querySelectorAll('.modal .btn-secondary').forEach(closeBtn => {
    closeBtn.addEventListener('click', (e) => {
        const modal = e.target.closest('.modal');
        if (modal) {
            modal.close();
        }
    });
});

// Close modal when clicking outside
document.querySelectorAll('.modal').forEach(modal => {
    modal.addEventListener('click', (e) => {
        const dialogDimensions = modal.getBoundingClientRect();
        if (
            e.clientX < dialogDimensions.left ||
            e.clientX > dialogDimensions.right ||
            e.clientY < dialogDimensions.top ||
            e.clientY > dialogDimensions.bottom
        ) {
            modal.close();
        }
    });
});
