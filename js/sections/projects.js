// Projects section HTML content and functionality
export function createProjectsSection() {
    // Load section-specific CSS
    if (!document.querySelector('link[href="./css/sections/projects.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './css/sections/projects.css';
        document.head.appendChild(link);
    }

    const projectsSection = document.createElement('section');
    projectsSection.id = 'projects';
    
    projectsSection.innerHTML = `
        <p class="section__text__p1">Browse My Recent</p>
        <h1 class="title">Projects</h1>
        <div class="experience-details-container">
            <div class="about-containers">
                <div class="details-container color-container" data-project="1">
                    <div class="article-container">
                        <img src="./assets/project-1.png" alt="Project 1" class="project-img" />
                    </div>
                    <h2 class="experience-sub-title project-title">Project One</h2>
                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn github-btn">Github</button>
                        <button class="btn btn-color-2 project-btn demo-btn">Live Demo</button>
                    </div>
                </div>
                <div class="details-container color-container" data-project="2">
                    <div class="article-container">
                        <img src="./assets/project-2.png" alt="Project 2" class="project-img" />
                    </div>
                    <h2 class="experience-sub-title project-title">Project Two</h2>
                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn github-btn">Github</button>
                        <button class="btn btn-color-2 project-btn demo-btn">Live Demo</button>
                    </div>
                </div>
                <div class="details-container color-container" data-project="3">
                    <div class="article-container">
                        <img src="./assets/project-3.png" alt="Project 3" class="project-img" />
                    </div>
                    <h2 class="experience-sub-title project-title">Project Three</h2>
                    <div class="btn-container">
                        <button class="btn btn-color-2 project-btn github-btn">Github</button>
                        <button class="btn btn-color-2 project-btn demo-btn">Live Demo</button>
                    </div>
                </div>
            </div>
        </div>
        <img src="./assets/arrow.png" alt="Arrow icon" class="icon arrow" data-target="#contact" />
    `;

    return projectsSection;
}

// Project links configuration
const projectLinks = {
    1: {
        github: 'https://github.com/',
        demo: 'https://github.com/'
    },
    2: {
        github: 'https://github.com/',
        demo: 'https://github.com/'
    },
    3: {
        github: 'https://github.com/',
        demo: 'https://github.com/'
    }
};

// Initialize projects section event listeners
export function initializeProjectsSection() {
    // Add event listeners for project buttons
    const projectButtons = document.querySelectorAll('.project-btn');
    projectButtons.forEach(button => {
        button.addEventListener('click', (e) => {
            const projectNumber = parseInt(e.target.closest('.color-container').getAttribute('data-project'));
            const type = e.target.classList.contains('github-btn') ? 'github' : 'demo';
            openProjectLink(type, projectNumber);
        });
    });

    // Add event listener for arrow navigation
    const arrow = document.querySelector('#projects .arrow');
    arrow.addEventListener('click', () => {
        const targetSection = arrow.getAttribute('data-target');
        document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
    });
}

function openProjectLink(type, projectNumber) {
    window.open(projectLinks[projectNumber][type], '_blank');
}
