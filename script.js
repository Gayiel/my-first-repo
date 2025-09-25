document.addEventListener('DOMContentLoaded', () => {

    // --- Custom Cursor Logic ---
    const cursor = document.querySelector('.custom-cursor');
    const links = document.querySelectorAll('a, button, .play-btn, .gallery-grid img');

    document.addEventListener('mousemove', e => {
        cursor.style.transform = `translate(${e.clientX}px, ${e.clientY}px) translate(-50%, -50%)`;
    });

    links.forEach(link => {
        link.addEventListener('mouseenter', () => cursor.classList.add('hover'));
        link.addEventListener('mouseleave', () => cursor.classList.remove('hover'));
    });

    // --- Smooth Scrolling for Navigation ---
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();

            const targetId = this.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);

            if (targetElement) {
                window.scrollTo({
                    top: targetElement.offsetTop - document.querySelector('header').offsetHeight,
                    behavior: 'smooth'
                });
            }
        });
    });

    // --- Section Fade-in on Scroll ---
    const sections = document.querySelectorAll('section');

    const observerOptions = {
        root: null,
        rootMargin: '0px',
        threshold: 0.2
    };

    const sectionObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    sections.forEach(section => {
        sectionObserver.observe(section);
    });

    // --- Audio Player Functionality (Frontend Only) ---
    // This is a placeholder for a more advanced audio system.
    // For a real-world application, you would load tracks dynamically from a server.
    const audioPlayer = document.querySelector('.audio-player');
    const playBtn = document.querySelector('.play-btn');

    playBtn.addEventListener('click', () => {
        // Here, you would toggle play/pause for an audio element.
        // For example:
        // const audio = new Audio('path/to/your/track.mp3');
        // if (audio.paused) {
        //     audio.play();
        //     playBtn.innerHTML = '<svg ...> Pause Icon </svg>';
        // } else {
        //     audio.pause();
        //     playBtn.innerHTML = '<svg ...> Play Icon </svg>';
        // }

        console.log("Play/Pause button clicked. Add your audio logic here!");
    });
});