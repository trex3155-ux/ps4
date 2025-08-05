document.addEventListener("DOMContentLoaded", function () {
    const cards = document.querySelectorAll('.card');

    cards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            card.style.backgroundColor = '#555';
        });

        card.addEventListener('mouseleave', () => {
            card.style.backgroundColor = '#333';
        });
    });
});
