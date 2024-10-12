// js/scripts.js
document.querySelectorAll('.timeline-item').forEach(item => {
    item.addEventListener('click', () => {
        item.classList.toggle('expanded');
        item.querySelector('p').classList.toggle('visible');
    });
});
