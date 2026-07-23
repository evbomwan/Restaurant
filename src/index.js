import "./styles.css";
import loadHome from "./home.js";
import loadMenu from "./menu.js";
import loadAbout from "./about.js";

const content = document.getElementById("content");
const homeContent = document.getElementById("homeContent");
homeContent.addEventListener("click", ()=> {
    content.textContent = "";
    content.appendChild(loadHome());
})

const menuContent = document.getElementById("menuContent");
menuContent.addEventListener("click", ()=> {
    content.textContent = "";
    content.appendChild(loadMenu());
})

const aboutContent = document.getElementById("aboutContent");
aboutContent.addEventListener("click", ()=> {
    content.textContent = "";
    content.appendChild(loadAbout());
})



