//BUTTON STYLE
$(document).ready(function() {

  const selectedStyle = sessionStorage.getItem('selectedStyle');
    if (!selectedStyle){
      document.getElementById("historical_css").setAttribute("href", 'styles/style1.css');
    } else {
      document.getElementById("historical_css").setAttribute("href", selectedStyle);
    };

  // Toggle the display of style buttons
  document.getElementById('container-button').addEventListener('click', function() {
      var styleButtons = document.querySelectorAll('.style-button');
      styleButtons.forEach(function(button) {
        button.style.display = (button.style.display === 'none' ? 'block' : 'none');
      });
  });

  // Event listener for ArtDeco style
  var ArtDeco = document.getElementById('artDeco-style');
  ArtDeco.addEventListener('click', function(){
      document.getElementById("historical_css").setAttribute("href", "styles/artDeco.css");
      sessionStorage.setItem('selectedStyle', "styles/artDeco.css");
  });

  // Event listener for Punkzine style
  var Punkzine = document.getElementById('punkzine-style');
  Punkzine.addEventListener('click', function(){
      document.getElementById("historical_css").setAttribute("href", "styles/punkzine.css");
      sessionStorage.setItem('selectedStyle', "styles/punkzine.css");
  });

  // Event listener for Default style
  var Default = document.getElementById('default-style');
  Default.addEventListener('click', function(){
      document.getElementById("historical_css").setAttribute("href", "styles/style1.css");
      sessionStorage.setItem('selectedStyle', "styles/style1.css");
  });
});

window.addEventListener('scroll', function () {
    const navbar = document.querySelector('.header');
    const scrollPosition = window.scrollY;

    if (scrollPosition > $(window).height()/100*96) {
        navbar.classList.remove("nav-transparent-background");
        navbar.classList.add("nav-colored-background");
    } else {
        navbar.classList.remove("nav-colored-background");
        navbar.classList.add("nav-transparent-background");
    }
});


//ICON HAMBURGER TO OPEN THE MENU-

let item = document.querySelector('.icon-hamburger');
item.addEventListener("click", function() {
    document.body.classList.toggle('menu-open');
});

//SCROLL TO TOP 
// Show/hide the button based on scroll position
window.onscroll = function() {
  var scrollTopBtn = document.getElementById("go_top");
  if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
    scrollTopBtn.style.display = "block";
  } else {
    scrollTopBtn.style.display = "none";
  }
};

// Function to scroll to the top of the page
function scrollToTop() {
  document.body.scrollTop = 0;  // For Safari
  document.documentElement.scrollTop = 0;  // For Chrome, Firefox, IE, and Opera
}