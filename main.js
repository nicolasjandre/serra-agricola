// Troca a imagem de vegetal de fundo da página

function imgSlider(vegetable){
    const img = document.querySelector('.verdurasLayout')
    img.src = vegetable
}


// Troca a cor de fundo para ficar de acordo com o vegetal escolhido

function colorChange(color){
    const circle = document.querySelector('.circle')
    circle.style.background = color;
    const span = document.querySelector('span')
    span.style.color = color;
    const button = document.querySelector('.button')
    button.style.background = color;
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