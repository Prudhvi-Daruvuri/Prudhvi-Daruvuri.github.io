// Experience section HTML content and functionality
export function createExperienceSection() {
    // Load section-specific CSS
    if (!document.querySelector('link[href="./css/sections/experience.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './css/sections/experience.css';
        document.head.appendChild(link);
    }

    const experienceSection = document.createElement('section');
    experienceSection.id = 'experience';
    
    experienceSection.innerHTML = `
        <p class="section__text__p1">Explore My</p>
        <h1 class="title">Experience</h1>
        <div class="timeline">
            <div class="container left">
                <div class="content">
                    <h3>Artificial Intelligence Software Developer</h3>
                    <p>Apr 2023 - Present</p>
                    <p>Simulation Software & Technology (S2T) Pte Ltd, Singapore</p>
                    <ul class="hidden">
                        <li>Implemented a high-performance facial recognition system capable of processing large-scale image and video databases, significantly improving identification accuracy and scalability.</li>
                        <li>Designed and deployed a reverse multi-modal search application using CLIP and ImageBind embeddings, enabling instant retrieval from over 5M images with seamless user interaction.</li>
                        <li>Developed and trained token classification models for tasks such as named entity recognition and part-of-speech tagging, enhancing NLP capabilities for client applications.</li>
                        <li>Built scalable AI applications leveraging open-source LLMs and optimized vector storage with Milvus, achieving sub-second query performance for embeddings.</li>
                        <li>Performed multimedia analysis for object detection, OCR, SpeechToText, and keyframe identification, integrating insights into a unified graph database with Neo4j for improved relational analysis.</li>
                        <li>Delivered speech-to-text and multilingual translation solutions, enhancing the accessibility and usability of processed content for diverse audiences.</li>
                        <li>Containerized all services with Docker for seamless deployment and orchestration in the Azure Cloud, ensuring scalability and reliability.</li>
                    </ul>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h3>Machine Learning Developer (Computer Vision)</h3>
                    <p>Apr 2021 - Apr 2023</p>
                    <p>Cynapse.ai, Singapore</p>
                    <ul class="hidden">
                        <li>Developed and optimized video analytics pipelines using C++, enhancing processing speed and ensuring seamless integration with client applications.</li>
                        <li>Converted deep learning models to ONNX, UFF, and TensorRT for efficient deployment in production pipelines, reducing model inference latency by 35%.</li>
                        <li>Trained and fine-tuned custom models for tasks such as object detection, classification, semantic segmentation, key-point detection, and action recognition.</li>
                        <li>Implemented semi-automatic hyperparameter tuning pipelines, improving model performance by up to 10%, and streamlined workflows with regularization techniques.</li>
                        <li>Designed and automated data processing pipelines using Python, optimizing multi-core utilization to boost speed by 40%.</li>
                        <li>Researched and developed synthetic image data generation pipelines using GANs and Variational Autoencoders, increasing the diversity and volume of training datasets.</li>
                        <li>Enhanced multi-class, multi-label classification models for facial attribute recognition (e.g., age, gender, hair type, and color) by leveraging advanced architectures and regularization techniques.</li>
                        <li>Explored and implemented Neural Architecture Search (NAS) frameworks like AutoKeras and KerasTuner to design efficient deep learning models with minimal computational overhead.</li>
                    </ul>
                </div>
            </div>
            <div class="container left">
                <div class="content">
                    <h3>Software Engineer</h3>
                    <p>Jun 2018 - Mar 2021</p>
                    <p>Tata Consultancy Services, Hyderabad</p>
                    <ul class="hidden">
                        <li>Designed and developed ETL pipelines using Informatica PowerCenter, automating data ingestion and transformation for Bank of America projects, ensuring 100% compliance with data processing standards.</li>
                        <li>Managed loading by designing and implementing multi-source data files from systems like Netezza, Oracle, and MySQL into Exadata staging areas, streamlining the data consolidation process.</li>
                        <li>Automated repetitive tasks with Python scripts (e.g., Openpyxl for Excel and Regex for data validation), achieving up to 60% reduction in task completion time.</li>
                        <li>Developed and tested Spark-based scripts in Scala, leading proof-of-concept initiatives to assess Apache Spark's applicability for large-scale data processing.</li>
                        <li>Collaborated with onshore and offshore development leads, conducting unit tests, maintaining detailed test logs, and ensuring seamless integration of workflows into production.</li>
                        <li>Improved data validation processes by designing and implementing reusable workflows and mappings, enhancing data accuracy and consistency.</li>
                    </ul>
                </div>
            </div>
            <div class="container right">
                <div class="content">
                    <h3>Software Developer Intern</h3>
                    <p>May 2017 - Jul 2017</p>
                    <p>Third Wave Power, Singapore</p>
                    <ul class="hidden">
                        <li>Assisted the R&D team in prototyping and setting up a LoRaWAN network, enabling long-range, low-power wireless communication for IoT devices.</li>
                        <li>Researched and evaluated open-source network servers, identifying feasible solutions for integration with RisingHF gateways.</li>
                        <li>Designed and implemented a network connecting two gateways and twenty nodes, demonstrating the scalability of LoRaWAN technology in real-world scenarios.</li>
                        <li>Conducted feasibility analysis for porting network server software to RisingHF gateways, ensuring compatibility and efficiency.</li>
                        <li>Documented research and implementation processes, creating detailed technical reports to support future development and deployment efforts.</li>
                    </ul>
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
    if (arrow) {
        arrow.addEventListener('click', () => {
            const targetSection = arrow.getAttribute('data-target');
            document.querySelector(targetSection).scrollIntoView({ behavior: 'smooth' });
        });
    }

    // Add event listeners for timeline containers
    const containers = document.querySelectorAll('.timeline .container');
    let activeContainer = null;

    containers.forEach(container => {
        container.addEventListener('mouseenter', () => {
            // Reset any existing active container
            if (activeContainer && activeContainer !== container) {
                resetSpacing(activeContainer);
            }

            const ul = container.querySelector('ul');
            if (ul) {
                // Show the ul temporarily to get its height
                ul.style.display = 'block';
                ul.style.visibility = 'hidden';
                const ulHeight = ul.getBoundingClientRect().height;
                ul.style.display = '';
                ul.style.visibility = '';

                // Add extra padding to the spacing
                const spacing = ulHeight + 60; // 60px extra padding

                // Apply spacing to the current container
                container.style.marginBottom = `${spacing}px`;

                // Find the next container and adjust its margin if needed
                const nextContainer = container.nextElementSibling;
                if (nextContainer) {
                    nextContainer.style.marginTop = '20px'; // Add some spacing to the next container
                }

                activeContainer = container;
            }
        });

        container.addEventListener('mouseleave', () => {
            setTimeout(() => {
                if (!container.matches(':hover')) {
                    resetSpacing(container);
                    activeContainer = null;
                }
            }, 100);
        });
    });

    function resetSpacing(container) {
        container.style.marginBottom = '30px'; // Reset to default margin
        const nextContainer = container.nextElementSibling;
        if (nextContainer) {
            nextContainer.style.marginTop = '0';
        }
    }
}

// Initialize experience section
initializeExperienceSection();
