import './modules/style.css';
import home from './modules/home.js';
import menu from './modules/menu.js';
import contact from './modules/contact.js';

const content = document.getElementById("content");
content.appendChild(home()); //start with homepage
let homeLoaded = true;

startEventListener(homeLoaded);

function startEventListener(homeLoaded){ //Do the tab-switching
    const titleTop = document.getElementById("titleTop").addEventListener("click", loadHome);
    const homeTop = document.getElementById("homeTop").addEventListener("click", loadHome);
    const menuTop = document.getElementById("menuTop").addEventListener("click", loadMenu);
    const contactTop = document.getElementById("contactTop").addEventListener("click", loadContact);
    const homeBottom = document.getElementById("homeBottom").addEventListener("click", loadHome);
    const titleBottom = document.getElementById("titleBottom").addEventListener("click", loadHome);
    const menuBottom = document.getElementById("menuBottom").addEventListener("click", loadMenu);
    const contactBottom = document.getElementById("contactBottom").addEventListener("click", loadContact);
    if (homeLoaded) {const menuCenter = document.getElementById("menuCenter").addEventListener("click", loadMenu)};
};

function loadHome(e){
    e.preventDefault();
    const element = document.getElementById('pageLoadContainer');
    element.remove(); //"clean" the page by removing the Container
    content.appendChild(home()); //"load" new page
    homeLoaded = true;
    startEventListener(homeLoaded);
}

function loadMenu(e){
    e.preventDefault();
    const element = document.getElementById('pageLoadContainer');
    element.remove(); //"clean" the page by removing the Container
    content.appendChild(menu()); //"load" new page
    homeLoaded = false;
    startEventListener(homeLoaded);
}

function loadContact(e){
    e.preventDefault();
    const element = document.getElementById('pageLoadContainer');
     element.remove(); //"clean" the page by removing the Container
    content.appendChild(contact()); //"load" new page
    homeLoaded = false;
    startEventListener(homeLoaded);

    //Add message after submit Contact Form
    const form = document.querySelector('form');
    form.addEventListener('submit', (e) => {
        e.preventDefault();
        document.getElementById('submittedMessage').classList.add('show');
        form.classList.add('noshow');
    });
}