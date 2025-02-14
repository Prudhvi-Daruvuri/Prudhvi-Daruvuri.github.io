// Experience section HTML content and functionality
export function createExperienceSection() {
    const experienceSection = document.createElement('section');
    experienceSection.id = 'experience';
    
    experienceSection.innerHTML = `
        <p class="section__text__p1">Explore My</p>
        <h1 class="title">Experience</h1>
        <div class="experience-details-container">
            <div class="about-containers">
                <div class="details-container">
                    <h2 class="experience-sub-title">AI Software Developer</h2>
                    <div class="article-container">
                        <article>
                            <img src="./assets/checkmark.png" alt="Experience icon" class="icon" />
                            <div>
                                <h3>Python</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="./assets/checkmark.png" alt="Experience icon" class="icon" />
                            <div>
                                <h3>PyTorch</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="./assets/checkmark.png" alt="Experience icon" class="icon" />
                            <div>
                                <h3>Vector Database (Milvus)</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="./assets/checkmark.png" alt="Experience icon" class="icon" />
                            <div>
                                <h3>Docker</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="./assets/checkmark.png" alt="Experience icon" class="icon" />
                            <div>
                                <h3>Hugging Face, OpenCV, Spacy, NLTK</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="./assets/checkmark.png" alt="Experience icon" class="icon" />
                            <div>
                                <h3>NoSQL (MongoDB, Elastic)</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                    </div>
                </div>
                <div class="details-container">
                    <h2 class="experience-sub-title">AI/ML Software Developer (Computer Vision)</h2>
                    <div class="article-container">
                        <article>
                            <img src="./assets/checkmark.png" alt="Experience icon" class="icon" />
                            <div>
                                <h3>Python/ C++</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="./assets/checkmark.png" alt="Experience icon" class="icon" />
                            <div>
                                <h3>Docker</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                        <article>
                            <img src="./assets/checkmark.png" alt="Experience icon" class="icon" />
                            <div>
                                <h3>OpenCV</h3>
                                <p>Experienced</p>
                            </div>
                        </article>
                        <article>
                            <img src="./assets/checkmark.png" alt="Experience icon" class="icon" />
                            <div>
                                <h3>Git</h3>
                                <p>Intermediate</p>
                            </div>
                        </article>
                    </div>
                </div>
            </div>
        </div>
        <img src="./assets/arrow.png" alt="Arrow icon" class="icon arrow" data-target="#projects" />
    `;

    return experienceSection;
}

// Initialize experience section event listeners
export function initializeExperienceSection() {
    const arrow = document.querySelector('#experience .arrow');
    arrow.addEventListener('click', () => {
        const targetSection = arrow.getAttribute('data-target');
        document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
    });
}
