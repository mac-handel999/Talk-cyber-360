// Add simple scroll effect or form handling
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

console.log("TalkCyber360 Website Initialized");



//for hero cursor typing effect  

const textElement = document.getElementById('typing-text');
const phrases = [
    "Revealing the Cyber World",
    "Empowering Cybersecurity Talents In Africa ",
    "Building Future Security Tech And Products",
    "Active And Vibrante Cyber Sec And Tech Community",
    "Creating CTF And Real-World Cyber Sec Champions"
];

let phraseIndex = 0;
let charIndex = 0;
let isDeleting = false;

function type() {
    const currentPhrase = phrases[phraseIndex];
    
    if (isDeleting) {
        textElement.textContent = currentPhrase.substring(0, charIndex - 1);
        charIndex--;
    } else {
        textElement.textContent = currentPhrase.substring(0, charIndex + 1);
        charIndex++;
    }

    let typeSpeed = isDeleting ? 50 : 100;

    if (!isDeleting && charIndex === currentPhrase.length) {
        typeSpeed = 2000; // Pause at end
        isDeleting = true;
    } else if (isDeleting && charIndex === 0) {
        isDeleting = false;
        phraseIndex = (phraseIndex + 1) % phrases.length;
    }

    setTimeout(type, typeSpeed);
}

document.addEventListener('DOMContentLoaded', type);