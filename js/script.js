let button = document.getElementById('menu-btn')
let menu = document.getElementById('menu')

button.addEventListener('click', function(){
  button.classList.toggle('open')
  menu.classList.toggle('flex')
  menu.classList.toggle('hidden')
});

