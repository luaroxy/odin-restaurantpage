function header() {
    const header = document.createElement('div');
    header.classList.add('header');

    const titletop = document.createElement('div');
    titletop.textContent = ("Krusty Krab");

    const optionstop = document.createElement('div');
    optionstop.classList.add('optionstop');
    const hometop = document.createElement('a');
    hometop.textContent = ("Home");
    hometop.setAttribute('id','homeTop');
    hometop.setAttribute('href','#');
    optionstop.appendChild(hometop);
    const menutop = document.createElement('a');
    menutop.textContent = ("Menu");
    menutop.setAttribute('id','menuTop');
    menutop.setAttribute('href','#');
    optionstop.appendChild(menutop);
    const contacttop = document.createElement('a');
    contacttop.textContent = ("Contact");
    contacttop.setAttribute('id','contactTop');
    contacttop.setAttribute('href','#');
    optionstop.appendChild(contacttop);

    header.appendChild(titletop);
    header.appendChild(optionstop);

    return header;
  }

  export default header;