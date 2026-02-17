document.addEventListener('DOMContentLoaded', () => {
    // Subtle parallax effect on mouse move
    const blobs = document.querySelectorAll('.blob');
    const container = document.body;

    container.addEventListener('mousemove', (e) => {
        const x = e.clientX / window.innerWidth;
        const y = e.clientY / window.innerHeight;

        blobs.forEach((blob, index) => {
            const speed = (index + 1) * 20; // varying speeds
            const xOffset = (x - 0.5) * speed;
            const yOffset = (y - 0.5) * speed;
            
            blob.style.transform = `translate(${xOffset}px, ${yOffset}px)`;
        });
    });

    // Animate the logo on load a bit more
    const logo = document.querySelector('.logo-img');
    if(logo) {
        setTimeout(() => {
            logo.style.transform = 'scale(1) rotate(0deg)';
        }, 300);
    }
});
