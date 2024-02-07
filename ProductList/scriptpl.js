
  let gridListButtons = document.querySelectorAll('.grid-list-button');

  gridListButtons.forEach(button => {
      button.addEventListener('click', gridListToggle);
  });
  
  function gridListToggle() {
      // Toggle the 'list' class on the container
      const container = document.querySelector('.container');
      container.classList.toggle('list-view');
  
      // Toggle the animation class on the button
      this.classList.toggle('animation');
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
