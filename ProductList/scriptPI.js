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

  //Kodet av Amalie og Tony
/* LIGHT AND DARK MODE */

function toggleMode() {
  const currentTheme = document.documentElement.getAttribute('data-theme');
  const newTheme = currentTheme === 'light' ? 'dark' : 'light';

  document.documentElement.setAttribute('data-theme', newTheme);
  localStorage.setItem('theme', newTheme);
  
  const body = document.body;
  const circle = document.querySelector('.circle');

  // Add transition class only when toggling mode
  body.classList.add('transition-theme');

  body.classList.toggle('dark-mode');
  circle.classList.toggle('dark-mode');

  body.style.backgroundColor = body.classList.contains('dark-mode') ? '#222' : '#fff';

  // Remove transition class after the transition completes
  setTimeout(function() {
    body.classList.remove('transition-theme');
  }, 1000); // Adjust the time according to your transition duration
}
  
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


// Grid Function 

function grid() {
  container.classList.add('grid'); // Add the 'grid' class to container
  container.classList.remove('list'); // Remove the 'list' class from container
  switchGritToList.classList.add('listIcon'); // Add the 'listIcon' from class
  switchGritToList.classList.remove('gridIcon'); // Remove the 'gridIcon' from class
}

function list() {
  container.classList.add('list'); // Add the 'list' class to container
  container.classList.remove('grid'); // Remove the 'grid' class from container
  switchGritToList.classList.add('gridIcon'); // Add the 'gridIcon' from class
  switchGritToList.classList.remove('listIcon'); // Remove the 'listIcon' from class
  imgList.classList.add('listImg');
}


const btn = document.getElementById('btn');
const imgList = document.querySelectorAll('.imgPL');

btn.addEventListener('click'),()=>{
  para.forEach(el => {
    el.classList.toggle('red');
  })
}


// Grid Button
let isRowLayout = true;

const container = document.querySelector('.divContainProducts');
const switchGritToList = document.querySelector('.gridImg');

function toggleLayout() {
  if (isRowLayout) {
    grid(); // Call the grid function to switch to grid layout
  } else {
    list(); // Call the list function to switch to list layout
  }

  isRowLayout = !isRowLayout; // Toggle the layout flag
}
