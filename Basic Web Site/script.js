document.addEventListener("DOMContentLoaded", function() {
    const box = document.getElementById("animated-box");
    let position = 0;
    let direction = 1;

    function animateBox() {
        position += 5 * direction;
        if (position >= 300 || position <= 0) {
            direction *= -1; // reverse direction
        }
        box.style.transform = `translateX(${position}px)`;
        requestAnimationFrame(animateBox);
    }

    animateBox();
});
