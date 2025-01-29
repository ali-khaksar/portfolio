// Scroll to top on page load
window.addEventListener('load', function () {
    window.scrollTo({
        top: 0,
        behavior: 'smooth' 
    });
});

// Smooth scrolling for anchor links
document.querySelectorAll('.smooth-scroll').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const targetId = this.getAttribute('href').substring(1);
        const targetElement = document.getElementById(targetId);

        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        } else {
            window.location.href = this.getAttribute('href');
        }
    });
});

// Scroll to top when clicking on "Ali Khaksar"
document.getElementById('header-name').addEventListener('click', function (e) {
    e.preventDefault(); 
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
});

// Contact form submission
document.getElementById('contact-form').addEventListener('submit', function (e) {
    e.preventDefault();

    const formData = new FormData(this);
    const object = {};
    formData.forEach((value, key) => {
        object[key] = value;
    });

    fetch('https://formspree.io/f/your-form-id', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json'
        },
        body: JSON.stringify(object)
    })
    .then(response => response.json())
    .then(data => {
        alert('Message sent successfully!');
        this.reset();
    })
    .catch(error => {
        console.error('Error:', error);
        alert('An error occurred. Please try again.');
    });
});

// Function to copy email to clipboard
function copyEmail() {
    const email = "ali_khaksar@outlook.com";
    navigator.clipboard.writeText(email).then(() => {
        alert("Email copied to clipboard!");
    }).catch(() => {
        alert("Failed to copy email. Please copy it manually.");
    });
}