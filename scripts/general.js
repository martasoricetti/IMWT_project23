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
    });
});

