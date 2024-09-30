const menu = document.getElementById('menu')
const navbar = document.getElementById('navbara')

menu.addEventListener('click', function(){
  navbar.classList.toggle('navtoggle')
})

const favourite = document.getElementById('favourite-prodetail')

favourite.addEventListener('click', function(){
  favourite.classList.toggle('Like')
})


function number() {
  let detailnumber = document.getElementById('number-detail');
  if (detailnumber.value < 1) {
    detailnumber.value = 1
  } 

}


var Main = document.getElementById('Main-img')
var Small = document.getElementsByClassName('small')

Small[0].onclick = function() {
  Main.src = Small[0].src;
}
Small[1].onclick = function() {
  Main.src = Small[1].src;
}

