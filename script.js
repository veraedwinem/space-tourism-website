const menuItem1 = document.getElementById("nav1");
const menuItem2 = document.getElementById("nav2");
const menuItem3 = document.getElementById("nav3");
const menuItem4 = document.getElementById("nav4");
const button = document.getElementById("button");
const techImg = document.getElementById("tech-img1");
const widthScreen = window.screen.width;
const menu = document.getElementById("nav");
const hamb = document.getElementById("nav-hamb");
const close = document.getElementById("nav-close");
const littleTitle = document.querySelector("title-dest");

if (widthScreen <= 1000){
    techImg.setAttribute("src", "assets/technology/image-space-capsule-landscape.jpg");
}

function toggleMenu() {
    if (menu.style.display == "flex") { // if is menuBox displayed, hide it
        menu.style.display = "none";
        hamb.style.display = "flex";
        close.style.display = "none";
        
    }
    else { // if is menuBox hidden, display it
        menu.style.display = "flex";
        hamb.style.display = "none";
        close.style.display = "flex";
    }
}





