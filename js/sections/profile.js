// Profile section HTML content and functionality
export function createProfileSection() {
    // Load section-specific CSS
    if (!document.querySelector('link[href="./css/sections/profile.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './css/sections/profile.css';
        document.head.appendChild(link);
    }

    const profileSection = document.createElement('section');
    profileSection.id = 'profile';
    
    profileSection.innerHTML = `
        <div class="section__pic-container">
            <img src="./assets/1649347417054.jpeg" alt="Prudhvi profile picture" />
        </div>
        <div class="section__text">
            <p class="section__text__p1">Hello, I'm</p>
            <h1 class="title">Prudhvi</h1>
            <p class="section__text__p2">AI/ML Engineer</p>
            <div class="btn-container">
                <button class="btn btn-color-2">Download CV</button>
                <button class="btn btn-color-1">Contact Info</button>
            </div>
            <div id="socials-container">
                <img src="./assets/pngegg.png" alt="My LinkedIn profile" class="icon" />
                <img src="./assets/github.png" alt="My Github profile" class="icon" />
            </div>
        </div>
    `;

    return profileSection;
}

// Initialize profile section event listeners
export function initializeProfileSection() {
    // LinkedIn profile link
    document.querySelector('#socials-container img[alt="My LinkedIn profile"]')
        .addEventListener('click', () => openSocialMedia('https://www.linkedin.com/in/prudhvi-daruvuri/'));

    // GitHub profile link
    document.querySelector('#socials-container img[alt="My Github profile"]')
        .addEventListener('click', () => openSocialMedia('https://github.com/prudhvi-daruvuri'));

    // CV download button
    document.querySelector('.btn.btn-color-2').addEventListener('click', downloadCV);

    // Contact button
    document.querySelector('.btn.btn-color-1').addEventListener('click', () => {
        document.querySelector('#contact').scrollIntoView({ behavior: 'smooth' });
    });
}

function downloadCV() {
    window.open('./assets/PrudhviResume.pdf');
}

function openSocialMedia(url) {
    window.open(url, '_blank');
}
