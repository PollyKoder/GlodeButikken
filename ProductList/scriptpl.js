let gridListButtons = document.querySelectorAll('.grid-list-button');

gridListButtons.forEach(button => {
    button.addEventListener('click', gridListToggle);
});

function gridListToggle() {
    let originalButton = this;

    // Toggle the 'list' class to change the button's appearance
    originalButton.classList.toggle('list');

    // Toggle the icon based on the presence of the 'list' class
    let dots = originalButton.querySelector('.dots');
    let lines = originalButton.querySelector('.lines');
    if (originalButton.classList.contains('list')) {
        dots.style.display = 'none';
        lines.style.display = 'block';
    } else {
        dots.style.display = 'block';
        lines.style.display = 'none';
    }
}

/* Light and Dark mode */
function toggleMode() {
    const body = document.body;
    const modeToggle = document.querySelector('.mode-toggle');
    const circle = document.querySelector('.circle');

    body.classList.toggle('dark-mode');
    circle.classList.toggle('dark-mode');

    body.style.backgroundColor = body.classList.contains('dark-mode') ? '#222' : '#fff';
}

// Function to toggle between grid and list view
function toggleView() {
    const productList = document.querySelector('.divContainProducts');
    productList.classList.toggle('grid-view');
}

// Event listener for the grid/list view button
document.querySelector('.grid-list-button').addEventListener('click', function() {
    toggleView();
    gridListToggle();
});


