// Contact section HTML content and functionality
export function createContactSection() {
    const contactSection = document.createElement('section');
    contactSection.id = 'contact';
    
    contactSection.innerHTML = `
        <p class="section__text__p1">Get in Touch</p>
        <h1 class="title">Contact Me</h1>
        <div class="contact-info-upper-container">
            <div class="contact-info-container">
                <img src="./assets/email.png" alt="Email icon" class="icon contact-icon email-icon" />
                <p><a href="mailto:prudhvi.daruvuri@gmail.com">prudhvi.daruvuri@gmail.com</a></p>
            </div>
            <div class="contact-info-container">
                <img src="./assets/linkedin.png" alt="LinkedIn icon" class="icon contact-icon" />
                <p><a href="https://www.linkedin.com/in/prudhvi-daruvuri/">LinkedIn</a></p>
            </div>
        </div>
    `;

    return contactSection;
}

// Initialize contact section event listeners
export function initializeContactSection() {
    // Add any contact-specific event listeners here if needed
    const emailLink = document.querySelector('#contact a[href^="mailto:"]');
    const linkedInLink = document.querySelector('#contact a[href*="linkedin"]');

    emailLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.location.href = emailLink.href;
    });

    linkedInLink.addEventListener('click', (e) => {
        e.preventDefault();
        window.open(linkedInLink.href, '_blank');
    });
}
