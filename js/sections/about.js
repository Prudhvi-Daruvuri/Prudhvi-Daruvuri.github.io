// About section HTML content and functionality
export function createAboutSection() {
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    
    aboutSection.innerHTML = `
        <p class="section__text__p1">Get To Know More</p>
        <h1 class="title">About Me</h1>
        <div class="section-container">
            <div class="section__pic-container">
                <img src="./assets/prudhvi2.png" alt="Profile picture" class="about-pic" />
            </div>
            <div class="about-details-container">
                <div class="about-containers">
                    <div class="details-container">
                        <img src="./assets/experience.png" alt="Experience icon" class="icon" />
                        <h3>Experience</h3>
                        <p>6+ years <br />AI/ML Engineer</p>
                    </div>
                    <div class="details-container">
                        <img src="./assets/education.png" alt="Education icon" class="icon" />
                        <h3>Education</h3>
                        <p>Masters in Computer Science <br /> Specialization in AI <br /> National University of Singapore</p>
                    </div>
                </div>
                <div class="text-container">
                    <p>
                        Innovative AI/ML Developer with a Master's degree in Artificial Intelligence 
                        and 6+ years of experience delivering state-of-the-art solutions in Computer Vision, NLP, and deep learning. 
                        Proficient in designing cutting-edge multimodal systems, leveraging LLMs, 
                        and building high-performance models to solve complex challenges. 
                        Adept at integrating emerging technologies like vector databases 
                        and embedding systems for scalable applications.
                    </p>
                </div>
            </div>
        </div>
        <img src="./assets/arrow.png" alt="Arrow icon" class="icon arrow" data-target="#experience" />
    `;

    return aboutSection;
}

// Initialize about section event listeners
export function initializeAboutSection() {
    const arrow = document.querySelector('#about .arrow');
    arrow.addEventListener('click', () => {
        const targetSection = arrow.getAttribute('data-target');
        document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
    });
}
