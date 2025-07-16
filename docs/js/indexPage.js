function scrollLeftHandler() {
    const scrollContainer = document.getElementById('productScroll');
    scrollContainer.scrollBy({ left: -480, behavior: 'smooth' });
}

function scrollRightHandler() {
    const scrollContainer = document.getElementById('productScroll');
    scrollContainer.scrollBy({ left: 480, behavior: 'smooth' });
}


document.addEventListener("DOMContentLoaded", function () {
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("visible");

                const counter = entry.target.querySelector(".spec-value");
                const target = +counter.dataset.target;
                let count = 0;

                // Set duration in ms and frame interval
                const duration = 1000; // total animation time (1 second)
                const frameRate = 30;  // number updates per second
                const totalFrames = Math.round((duration / 1000) * frameRate);
                const increment = target / totalFrames;



                const animate = () => {
                    count += increment;
                    if (count >= target) {
                        counter.textContent = target;
                    } else {
                        counter.textContent = Math.floor(count);
                        requestAnimationFrame(animate);
                    }
                };

                animate();
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.3 });

    document.querySelectorAll(".spec-animate").forEach(elem => {
        observer.observe(elem);
    });
});