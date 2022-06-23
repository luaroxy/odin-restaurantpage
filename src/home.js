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
     
     }
     
     function contact(){
     
     }
     
     function footer(){
     
     }

     container.appendChild(header());
     //container.appendChild(about());
     //container.appendChild(contact());
     //container.appendChild(footer());

     return container;
}

export default page_load;