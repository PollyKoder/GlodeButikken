function toggleMode() {
    const body = document.body;
    const modeToggle = document.querySelector('.mode-toggle');
    const circle = document.querySelector('.circle');

    body.classList.toggle('dark-mode');
    circle.classList.toggle('dark-mode');

    body.style.backgroundColor = body.classList.contains('dark-mode') ? '#222' : '#fff';
} 