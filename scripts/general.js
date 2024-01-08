// On page load, check if a style is stored in local storage and apply it
document.addEventListener('DOMContentLoaded', function() {
    const selectedStyle = localStorage.getItem('selectedStyle');
    if (selectedStyle) {
        // Apply the stored style to the page
        document.getElementById("historical_css").setAttribute("href", selectedStyle);
    }
});

//ICON HAMBURGER TO OPEN THE MENU-

let item = document.querySelector('.icon-hamburger');
item.addEventListener("click", function() {
    document.body.classList.toggle('menu-open');
});


//BUTTON STYLE
$(document).ready(function() {
    document.getElementById('container-button').addEventListener('click', function() {
        var styleButtons = document.querySelectorAll('.style-button');
        styleButtons.forEach(function(button) {
          button.style.display = (button.style.display === 'none' ? 'block' : 'none');
        });
        var ArtDeco = document.getElementById('artDeco-style');
        ArtDeco.addEventListener('click', function(){
            document.getElementById("historical_css").setAttribute("href", "../styles/artDeco.css");
            localStorage.setItem('selectedStyle', "../styles/artDeco.css");
            changeStyle('artDeco-style');
        });
        var Punkzine = document.getElementById('punkzine-style');
        Punkzine.addEventListener('click', function(){
            document.getElementById("historical_css").setAttribute("href", "../styles/punkzine.css");
            localStorage.setItem('selectedStyle', "../styles/punkzine.css");
            changeStyle('punkzine-style');
        });
        var Default = document.getElementById('default-style');
        Default.addEventListener('click', function(){
            document.getElementById("historical_css").setAttribute("href", "../styles/style1.css");
            localStorage.setItem('selectedStyle', "../styles/style1.css");
            changeStyle('default-style')
        })
    });
});

// Function to change the style
    function changeStyle(styleId) {
      // Reset all buttons to default style
      var buttons = document.querySelectorAll('.style-button');
      buttons.forEach(function(button) {
        button.classList.remove('active-style-button');
      });

      // Apply active style to the clicked button
      var activeButton = document.getElementById(styleId);
      
      // Add logic to apply the chosen style to the page based on the styleId
      // You can implement your own logic here to apply styles
    }


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