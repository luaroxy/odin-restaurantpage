function page_load(){
    const container = document.createElement('div');
    container.classList.add('container');

    function header() {
      const header = document.createElement('div');
      header.classList.add('header');

      const titletop = document.createElement('div');
      titletop.textContent = ("Krusty Krab");

      const optionstop = document.createElement('div');
      optionstop.classList.add('optionstop');
      const hometop = document.createElement('div');
      hometop.textContent = ("Home");
      optionstop.appendChild(hometop);
      const menutop = document.createElement('div');
      menutop.textContent = ("Menu");
      optionstop.appendChild(menutop);
      const contacttop = document.createElement('div');
      contacttop.textContent = ("Contact");
      optionstop.appendChild(contacttop);

      header.appendChild(titletop);
      header.appendChild(optionstop);

      return header;
    }

    function intro() {
        const intro = document.createElement('div');
        intro.classList.add('intro');

        const intro_background = document.createElement('div');
        intro_background.classList.add('intro_background');

        const intro_content = document.createElement('div');
        intro_content.classList.add('intro_content');
        const title = document.createElement('div');
        title.textContent = ("Krusty Krab");
        const subtitle = document.createElement('div');
        subtitle.textContent = ("Home of the Krabby Patty");
        intro_content.appendChild(title);
        intro_content.appendChild(subtitle);

        intro.appendChild(intro_background);
        intro.appendChild(intro_content);
     
        return intro;
     }
     
     function about() {
        const about = document.createElement('section');
        about.classList.add('about');
     
        const title = document.createElement('div');
        title.textContent = ("Krusty Krab");
     
        const subtitle = document.createElement('div');
        subtitle.textContent = ("Menu");
     
        about.appendChild(title);
        about.appendChild(subtitle);
     
        return about;
     }
     
     function contact(){
        const contact = document.createElement('section');
        contact.classList.add('contact');
     
        const address = document.createElement('div');
        address.textContent = ("address");
     
        const hours = document.createElement('div');
        hours.textContent = ("hours");

        const contact2 = document.createElement('div');
        contact2.textContent = ("contact");
     
        contact.appendChild(address);
        contact.appendChild(hours);
        contact.appendChild(contact2);
     
        return contact;
     }
     
     function footer(){
        const footer = document.createElement('footer');
        footer.classList.add('footer');
     
        const title = document.createElement('div');
        title.textContent = ("Krusty Krab");
     
        const options = document.createElement('div');
        options.classList.add('footeroptions');
        const homebottom = document.createElement('div');
        homebottom.textContent = ("Home");
        options.appendChild(homebottom);
        const menubottom = document.createElement('div');
        menubottom.textContent = ("Menu");
        options.appendChild(menubottom);
        const contactbottom = document.createElement('div');
        contactbottom.textContent = ("Contact");
        options.appendChild(contactbottom);
     
        footer.appendChild(title);
        footer.appendChild(options);
     
        return footer;
     }

     container.appendChild(header());
     container.appendChild(intro());
     container.appendChild(about());
     container.appendChild(contact());
     container.appendChild(footer());

     return container;
}

export default page_load;