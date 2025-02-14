export async function initializeBackground() {
    await tsParticles.load("tsparticles", {
        background: {
            color: "transparent"
        },
        fpsLimit: 60,
        particles: {
            color: {
                value: "#64ffda",
                animation: {
                    enable: true,
                    speed: 10
                }
            },
            links: {
                color: "#64ffda",
                distance: 150,
                enable: true,
                opacity: 0.2,
                width: 1
            },
            collisions: {
                enable: false,
            },
            move: {
                enable: true,
                speed: 0.5,
                direction: "none",
                random: false,
                straight: false,
                outModes: {
                    default: "bounce"
                },
                attract: {
                    enable: true,
                    rotateX: 600,
                    rotateY: 1200
                }
            },
            number: {
                density: {
                    enable: true,
                    area: 800
                },
                value: 80
            },
            opacity: {
                value: 0.5,
                animation: {
                    enable: true,
                    speed: 1,
                    minimumValue: 0.1
                }
            },
            size: {
                value: 3,
                random: true,
                animation: {
                    enable: true,
                    speed: 2,
                    minimumValue: 0.1
                }
            }
        },
        interactivity: {
            events: {
                onHover: {
                    enable: true,
                    mode: "grab"
                }
            },
            modes: {
                grab: {
                    distance: 140,
                    links: {
                        opacity: 0.5
                    }
                }
            }
        },
        detectRetina: true
    });
}
