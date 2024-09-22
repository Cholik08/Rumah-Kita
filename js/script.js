const icon = document.getElementById('menu-icon');
const menuList = document.getElementById('menu-list');

icon.addEventListener('click',()=>{
    menuList.classList.toggle('hidden');
})