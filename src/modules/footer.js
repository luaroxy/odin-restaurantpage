function footer(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
 
    const title = document.createElement('div');
    title.textContent = ("Krusty Krab");
 
    const options = document.createElement('div');
    options.classList.add('footeroptions');
    const homebottom = document.createElement('a');
    homebottom.textContent = ("Home");
    options.appendChild(homebottom);
    const menubottom = document.createElement('a');
    menubottom.textContent = ("Menu");
    options.appendChild(menubottom);
    const contactbottom = document.createElement('a');
    contactbottom.textContent = ("Contact");
    options.appendChild(contactbottom);
 
    footer.appendChild(title);
    footer.appendChild(options);
 
    return footer;
 }

 export default footer;