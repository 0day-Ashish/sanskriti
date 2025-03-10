document.addEventListener('DOMContentLoaded', function() {
    
    const heart = document.querySelector('.heart');

    heart.addEventListener('click', function(event) {
        for (let i = 0; i < 30; i++) {
            setTimeout(() => {
                createHeartEmoji(event.clientX, event.clientY);
            }, i * 100); // Stagger the creation of each heart emoji
        }
    });

    function createHeartEmoji(x, y) {
        const emoji = document.createElement('div');
        emoji.classList.add('mini-heart');
        emoji.style.left = `${x}px`;
        emoji.style.top = `${y}px`;
        const angle = Math.random() * 2 * Math.PI; // Random angle in radians
        const distance = Math.random() * 200; // Random distance
        emoji.style.transform = `translate(${Math.cos(angle) * distance}px, ${Math.sin(angle) * distance}px)`;
        document.body.appendChild(emoji);

        setTimeout(() => {
            emoji.remove();
        }, 2000);
    }
});

document.getElementById('playButton').addEventListener('click', function() {
    document.getElementById('audioPlayer').play();
});

