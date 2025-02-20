const btn = document.querySelector('.menuBtn');
const menu = document.querySelector('header nav ul');
btn.addEventListener('click',()=>{
  menu.classList.toggle('menu__open');
})