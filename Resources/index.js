/*----------------------------------------------------Menu Icon----------------------------------------------------*/

function changeicon1() {

    var icon = document.getElementById('icon-1');
    
        if(icon.className === "bi bi-menu-button-fill"){
    
        icon.className = "bi bi-menu-button-wide-fill";
    
        } else {
    
        icon.className = "bi bi-menu-button-fill";
    
        }
               
    }

/*----------------------------------------------------Search Bar---------------------------------------------------*/

const searchInput = document.getElementById('searchinput');
const searchButton = document.getElementById('searchbutton');

searchButton.addEventListener('click', () => {
  const searchTerm = searchInput.value;
  const selectedOption = document.querySelector(`#searchoptions option[value="${searchTerm}"]`);
  if (selectedOption) {
    const link = selectedOption.getAttribute('data-link');
    window.location.href = link;
  }
});


const searchInput2 = document.getElementById('searchinput-2');
const searchButton2 = document.getElementById('searchbutton-2');

searchButton2.addEventListener('click', () => {
  const searchTerm = searchInput2.value;
  const selectedOption2 = document.querySelector(`#searchoptions-2 option[value="${searchTerm}"]`);
  if (selectedOption2) {
    const link = selectedOption2.getAttribute('data-link');
    window.location.href = link;
  }
});

/*----------------------------------------------------Side Bar-----------------------------------------------------*/

var menuicon = document.querySelector(".menu-icon")
var sidebar = document.querySelector(".sidebar")
var mainbox = document.querySelector(".main-box")

menuicon.onclick = function(){
    sidebar.classList.toggle("hidden-sidebar")
    mainbox.classList.toggle("large-main-box")
}

function changeProductImage(clickedElement) {

    var colorOptions = document.querySelectorAll('.product-colours-img');
    
    colorOptions.forEach(function(element) {
        element.classList.remove('active');
    });
    
    clickedElement.classList.add('active');
}