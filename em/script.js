
window.addEventListener('load' , function () {
    if(localStorage.getItem('colormode') == 'dark'){
        root.classList.toggle('dark');
    }
    else if(localStorage.getItem('colormode') != 'dark'){
        root.classList.remove('dark');
    }
    loader.style.display = "none";

})
var menucover = document.querySelector(".mobile-menu-cover");
var loader = document.querySelector(".loader-page");
var menu = document.querySelector(".mobile-menu");
var body = document.querySelector("body");
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
