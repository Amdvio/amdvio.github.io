const header = document.querySelector('.header')
window.addEventListener('scroll' , function (){
    if(window.scrollY >= 30){
        header.style.top = 0;
    }
    else if(window.scrollY <= 30){
        header.style.top = '';
    }
})

window.addEventListener('load' , function () {
    if(localStorage.getItem('colormode') == 'dark'){
        root.classList.toggle('dark');
    }
    else if(localStorage.getItem('colormode') != 'dark'){
        root.classList.remove('dark');
    }
    loader.style.display = "none";

})
const menucover = document.querySelector(".mobile-menu-cover");
const loader = document.querySelector(".loader-page");
const menu = document.querySelector(".mobile-menu");
const body = document.querySelector("body");
const root = document.documentElement;
function showmenu(){
    menucover.classList.toggle('active');
    menu.classList.toggle('active');
}
function darkmod(){
    root.classList.toggle('dark');
    if(root.classList == 'dark'){
        localStorage.setItem('colormode' , 'dark');
    }
    else if(root.classList != 'dark'){
        localStorage.setItem('colormode' , 'light');
    }
}
