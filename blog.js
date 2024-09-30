const slider = document.querySelector('.slider')
const left = document.querySelector('.fa-arrow-left')
const right = document.querySelector('.fa-arrow-right')

var i = 0;

left.addEventListener('click', function() {
  i = (i > 0) ? i - 1 : 0;
  slider.style.transform = 'translate(' + (i) * -25 + '%)';
})


right.addEventListener('click', function() {
  i = (i < 3) ? i + 1 :3 ;
  slider.style.transform = 'translate(' + (i) * -25 + '%)';
})


const menu = document.getElementById('menu')
const navbar = document.getElementById('navbara')

menu.addEventListener('click', function(){
  navbar.classList.toggle('navtoggle')
})
