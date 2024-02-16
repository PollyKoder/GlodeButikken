//PL
// Check for existing theme in Local Storage
//Kodet av Tony
document.addEventListener('DOMContentLoaded', function() {
    const savedTheme = localStorage.getItem('theme');
    const body = document.body;
    const modeToggle = document.querySelector('.mode-toggle');
    const circle = document.querySelector('.circle');
  
    if (savedTheme) {
      document.documentElement.setAttribute('data-theme', savedTheme);
      body.classList.toggle('dark-mode', savedTheme === 'dark');
      circle.classList.toggle('dark-mode', savedTheme === 'dark');
      body.style.backgroundColor = savedTheme === 'dark' ? '#222' : '#fff';
    }
    // Remove transition class on page load
    body.classList.remove('transition-theme');
  });
  
  // search-box open close js code
  //Kodet av Sandra
  let navbar = document.querySelector(".navbar");
  let searchBox = document.querySelector(".search-box .bx-search");
  // let searchBoxCancel = document.querySelector(".search-box .bx-x");
  
  searchBox.addEventListener("click", ()=>{
    navbar.classList.toggle("showInput");
    if(navbar.classList.contains("showInput")){
      searchBox.classList.replace("bx-search" ,"bx-x");
    }else {
      searchBox.classList.replace("bx-x" ,"bx-search");
    }
  });
  
  // sidebar open close js code
  let navLinks = document.querySelector(".nav-links");
  let menuOpenBtn = document.querySelector(".navbar .bx-menu");
  let menuCloseBtn = document.querySelector(".nav-links .bx-x");
  menuOpenBtn.onclick = function() {
  navLinks.style.left = "0";
  }
  menuCloseBtn.onclick = function() {
  navLinks.style.left = "-100%";
  }
  
  
  // sidebar submenu open close js code
  let htmlcssArrow = document.querySelector(".htmlcss-arrow");
  htmlcssArrow.onclick = function() {
   navLinks.classList.toggle("show1");
  }
  let moreArrow = document.querySelector(".more-arrow");
  moreArrow.onclick = function() {
   navLinks.classList.toggle("show2");
  }
  let jsArrow = document.querySelector(".js-arrow");
  jsArrow.onclick = function() {
   navLinks.classList.toggle("show3");
  }

  //ARROW BUTTONS
  const container = document.querySelector('.divContainProducts');

document.addEventListener('keydown', (event) => {
    const key = event.key;
    if (key === 'ArrowLeft') {
        // Handle moving left
        container.scrollBy({
            left: -100, // Adjust the scroll distance as needed
            behavior: 'smooth' // Optional: Add smooth scrolling behavior
        });
    } else if (key === 'ArrowRight') {
        // Handle moving right
        container.scrollBy({
            left: 100, // Adjust the scroll distance as needed
            behavior: 'smooth' // Optional: Add smooth scrolling behavior
        });
    }
});

/*
let slideIndex = 0;
const slides = document.querySelectorAll('.gallery');

function showSlide(index) {
  slides.forEach(slide => {
    slide.style.display = 'none';
  });
  slides[index].style.display = 'block';
}

function nextSlide() {
  if (slideIndex < slides.length - 1) {
    slideIndex++;
  } else {
    slideIndex = 0;
  }
  showSlide(slideIndex);
}

function prevSlide() {
  if (slideIndex > 0) {
    slideIndex--;
  } else {
    slideIndex = slides.length - 1;
  }
  showSlide(slideIndex);
}

showSlide(slideIndex);
*/





// Grid Button
let isRowLayout = true;

    function toggleLayout() {
        const container = document.querySelector('.divContainProducts');
        const switchGritToList = document.querySelector('.gridImg')


        if (isRowLayout) {
            container.classList.toggle('list'); // Switch to list
            switchGritToList.classList.toggle('gridIcon');
        } else {
          container.classList.toggle('grid'); // Switch to grid 
          switchGritToList.classList.toggle('listIcon');
        }

        isRowLayout = !isRowLayout;
    }