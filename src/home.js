function page_load(){
    const container = document.createElement('div');

    function header() {
        const header = document.createElement('div');
        header.classList.add('header');
     
        const title = document.createElement('div');
        title.textContent = ("Krusty Krab");
     
        const subtitle = document.createElement('div');
        subtitle.textContent = ("Home of the Krabby Patty");
     
        header.appendChild(title);
        header.appendChild(subtitle);
     
        return header;
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
     container.appendChild(about());
     container.appendChild(contact());
     container.appendChild(footer());

     return container;
}

export default page_load;