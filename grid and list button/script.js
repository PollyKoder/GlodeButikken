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
