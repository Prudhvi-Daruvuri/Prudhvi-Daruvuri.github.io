// Import all section modules
import { createProfileSection, initializeProfileSection } from './sections/profile.js';
import { createAboutSection, initializeAboutSection } from './sections/about.js';
import { createExperienceSection, initializeExperienceSection } from './sections/experience.js';
import { createProjectsSection, initializeProjectsSection } from './sections/projects.js';
import { createContactSection, initializeContactSection } from './sections/contact.js';
import { createTechStackSection, initializeTechStackSection } from './sections/tech-stack.js';
import { initializeNavigation } from './navigation.js';
import { initializeBackground } from './background.js';

// Main function to initialize the website
function initializeWebsite() {
    // Initialize background first
    initializeBackground();

    // Initialize navigation
    initializeNavigation();

    // Initialize main content
    const main = document.querySelector('main');
    main.innerHTML = '';
    
    // Create and append all sections in the correct order
    const sections = [
        { element: createProfileSection(), init: initializeProfileSection },
        { element: createAboutSection(), init: initializeAboutSection },
        { element: createTechStackSection(), init: initializeTechStackSection },
        { element: createExperienceSection(), init: initializeExperienceSection },
        { element: createProjectsSection(), init: initializeProjectsSection },
        { element: createContactSection(), init: initializeContactSection }
    ];

    // Append sections in order
    sections.forEach(section => {
        main.appendChild(section.element);
        section.init();
    });
}

// Initialize the website when DOM is fully loaded
document.addEventListener('DOMContentLoaded', initializeWebsite);
