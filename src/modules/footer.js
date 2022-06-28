function footer(){
    const footer = document.createElement('footer');
    footer.classList.add('footer');
 
    const title = document.createElement('div');
    title.textContent = ("Krusty Krab");
    title.setAttribute('id','titleBottom');
 
    const options = document.createElement('div');
    options.classList.add('footeroptions');
    const homebottom = document.createElement('a');
    homebottom.textContent = ("Home");
    homebottom.setAttribute('id','homeBottom');
    homebottom.setAttribute('href','#');
    options.appendChild(homebottom);
    const menubottom = document.createElement('a');
    menubottom.textContent = ("Menu");
    menubottom.setAttribute('id','menuBottom');
    menubottom.setAttribute('href','#');
    options.appendChild(menubottom);
    const contactbottom = document.createElement('a');
    contactbottom.textContent = ("Contact");
    contactbottom.setAttribute('id','contactBottom');
    contactbottom.setAttribute('href','#');
    options.appendChild(contactbottom);
 
    footer.appendChild(title);
    footer.appendChild(options);
 
    return footer;
 }

 export default footer;