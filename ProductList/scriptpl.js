let gridListButtons = document.querySelectorAll('.grid-list-button');

gridListButtons.forEach(button => {
    button.addEventListener('click', gridListToggle);
});

function gridListToggle() {
    let originalButton = this;

    originalButton.classList.add('animation');
    originalButton.classList.toggle('list');

    // Clone the original button
    let clonedButton = originalButton.cloneNode(true);

    // Replace the original button with the cloned one
    originalButton.parentNode.replaceChild(clonedButton, originalButton);

    // Update the gridListButtons NodeList
    gridListButtons = document.querySelectorAll('.grid-list-button');

    // Add a click event listener to the cloned button
    clonedButton.addEventListener('click', gridListToggle);
}

// Define your JavaScript functions here

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
document.querySelector('.grid-list-button').addEventListener('click', toggleView);

// You can add more functions and event listeners as needed
