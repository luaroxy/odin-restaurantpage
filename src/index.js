import './style.css';
import Icon from './images/krustykrab.png';

function component() {
   const element = document.createElement('div');

   element.textContent = ("Testing");
   element.classList.add('hello');

   return element;
}

document.body.appendChild(component());