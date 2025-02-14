// Navigation functionality
export function toggleMenu() {
    const menu = document.querySelector(".menu-links");
    const icon = document.querySelector(".hamburger-icon");
    menu.classList.toggle("open");
    icon.classList.toggle("open");
}

// Initialize navigation
export function initializeNavigation() {
    // Add click handler for hamburger menu
    const hamburgerIcon = document.querySelector(".hamburger-icon");
    if (hamburgerIcon) {
        hamburgerIcon.addEventListener('click', toggleMenu);
    }

    // Add smooth scrolling to all navigation links
    const navLinks = document.querySelectorAll('.nav-links a, .menu-links a');
    navLinks.forEach(link => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = link.getAttribute('href');
            document.querySelector(targetId).scrollIntoView({ behavior: 'smooth' });
            
            // Close mobile menu if it's open
            const menu = document.querySelector(".menu-links");
            if (menu && menu.classList.contains('open')) {
                toggleMenu();
            }
        });
    });
}
