export function createTechStackSection() {
    // Load section-specific CSS
    if (!document.querySelector('link[href="./css/sections/tech-stack.css"]')) {
        const link = document.createElement('link');
        link.rel = 'stylesheet';
        link.href = './css/sections/tech-stack.css';
        document.head.appendChild(link);
    }

    const techStackSection = document.createElement('section');
    techStackSection.id = 'tech-stack';
    
    techStackSection.innerHTML = `
        <p class="section__text__p1">Tech Stack</p>
        <h1 class="title">Technologies I Use</h1>
        <div class="tech-grid">
            <!-- First row (2 main technologies) -->
            <img src="./assets/tech/python.png" alt="Python" class="tech-icon" />
            <img src="./assets/tech/tensorflow.png" alt="TensorFlow" class="tech-icon" />
            
            <!-- Second row (3 technologies) -->
            <img src="./assets/tech/pytorch.png" alt="PyTorch" class="tech-icon" />
            <img src="./assets/tech/aws.png" alt="AWS" class="tech-icon" />
            <img src="./assets/tech/docker.png" alt="Docker" class="tech-icon" />
            
            <!-- Third row (4 technologies) -->
            <img src="./assets/tech/CPP.png" alt="C++" class="tech-icon" />
            <img src="./assets/tech/huggingface.png" alt="Huggingface" class="tech-icon" />
            <img src="./assets/tech/milvus.png" alt="Milvus" class="tech-icon" />
            <img src="./assets/tech/mongo.png" alt="MongoDB" class="tech-icon" />
            
            <!-- Fourth row (remaining technologies) -->
            <img src="./assets/tech/openai.png" alt="OpenAI" class="tech-icon" />
            <img src="./assets/tech/opencv.png" alt="OpenCV" class="tech-icon" />
            <img src="./assets/tech/github.png" alt="GitHub" class="tech-icon" />
            <img src="./assets/tech/spark.png" alt="Spark" class="tech-icon" />
            <img src="./assets/tech/weaviate.png" alt="Weaviate" class="tech-icon" />
        </div>
    `;

    return techStackSection;
}

// Remove the initialization function since we don't need hover effects anymore
export function initializeTechStackSection() {}
