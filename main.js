const mobileButton = document.getElementById('mobileButton')
const activeNav = document.getElementById('nav')

mobileButton.addEventListener('click', toggleMenu)

function toggleMenu() {
  activeNav.classList.toggle('active')
}

function imgSlider(vegetable){
    const img = document.querySelector('.verdurasLayout')
    img.src = vegetable
}


function colorChange(color){
    const circle = document.querySelector('.circle')
    circle.style.background = color;
    const span = document.querySelector('span')
    span.style.color = color;
    const button = document.querySelector('.button')
    button.style.background = color;
    const lateralIcons = document.querySelector('ul.sci')
    lateralIcons.style.background = color;
}


// Aplica uma animação ao trocar o layout

function imageTransitionAnimation() {
    document.querySelector(".verdurasLayout").animate([
        // keyframes
        { opacity: 0 },
        { opacity: 1 }
      ], {
        // timing options
        duration: 600
      });

      document.querySelector(".logo").animate([
        // keyframes
        { opacity: 0 },
        { opacity: 1 }
      ], {
        // timing options
        duration: 600
      });
}


// Troca a logo junto da troca de todo o layout

function logoStyle(style){
    document.querySelector('.logo').src = style;
}