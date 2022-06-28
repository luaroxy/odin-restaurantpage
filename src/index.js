import './modules/style.css';
import home from './modules/home.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';

const content = document.getElementById("content");
content.appendChild(home());

startEventListener();

function startEventListener(){
    const homeTop = document.getElementById("homeTop").addEventListener("click", loadHome);
    const menuTop = document.getElementById("menuTop").addEventListener("click", loadMenu);
    const contactTop = document.getElementById("contactTop").addEventListener("click", loadContact);
};

function loadHome(e){
    e.preventDefault();
    const element = document.getElementById('pageLoadContainer');
    element.remove();
    content.appendChild(home());
    startEventListener();
}

function loadMenu(e){
    e.preventDefault();
    const element = document.getElementById('pageLoadContainer');
    element.remove();
    content.appendChild(menu());
    startEventListener();
}

function loadContact(e){
    e.preventDefault();
    const element = document.getElementById('pageLoadContainer');
     element.remove();
    content.appendChild(contact());
    startEventListener();
}