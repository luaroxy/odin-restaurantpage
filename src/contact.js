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
    
    function contactForm(){
        const contactForm = document.createElement('section');
        contactForm.classList.add('contactForm');

        const contactFormTitle = document.createElement('p');
        contactFormTitle.textContent = "Contact Us";
        contactForm.appendChild(contactFormTitle);

        const contactFormContainer = document.createElement('form');
        contactFormContainer.classList.add('contactFormContainer');

        const nameContainer = document.createElement('div');
        nameContainer.classList.add('inputContainer');
        const nameLabelForm = document.createElement('label');
        nameLabelForm.setAttribute("for", "name");
        nameLabelForm.textContent = "Name";
        nameContainer.appendChild(nameLabelForm);
        const nameInputForm = document.createElement('input');
        nameInputForm.setAttribute("type", "text");
        nameInputForm.setAttribute("name", "name");
        nameInputForm.setAttribute("id", "name");
        nameInputForm.setAttribute("required","true");
        nameContainer.appendChild(nameInputForm);

        const emailContainer = document.createElement('div');
        emailContainer.classList.add('inputContainer');
        const emailLabelForm = document.createElement('label');
        emailLabelForm.setAttribute("for", "email");
        emailLabelForm.textContent = "Email";
        emailContainer.appendChild(emailLabelForm);
        const emailInputForm = document.createElement('input');
        emailInputForm.setAttribute("type", "email");
        emailInputForm.setAttribute("name", "email");
        emailInputForm.setAttribute("id", "email");
        emailInputForm.setAttribute("required","true");
        emailContainer.appendChild(emailInputForm);

        const topicContainer = document.createElement('div');
        topicContainer.classList.add('inputContainer');
        const topicLabelForm = document.createElement('label');
        topicLabelForm.setAttribute("for", "topic");
        topicLabelForm.textContent = "Topic";
        topicContainer.appendChild(topicLabelForm);
        const topicInputForm = document.createElement('select');
        topicInputForm.setAttribute("name", "topic");
        topicInputForm.setAttribute("id", "topic");
        topicInputForm.setAttribute("required","true");
        topicContainer.appendChild(topicInputForm);
        const topicOption1 = document.createElement('option');
        topicOption1.textContent = "Reservation";
        topicOption1.setAttribute("value", "reservation");
        topicInputForm.appendChild(topicOption1);
        const topicOption2 = document.createElement('option');
        topicOption2.textContent = "Private Event";
        topicOption2.setAttribute("value", "privateevent");
        topicInputForm.appendChild(topicOption2);
        const topicOption3 = document.createElement('option');
        topicOption3.textContent = "Feedback";
        topicOption3.setAttribute("value", "feedback");
        topicInputForm.appendChild(topicOption3);
        const topicOption4 = document.createElement('option');
        topicOption4.textContent = "Other";
        topicOption4.setAttribute("value", "other");
        topicOption4.setAttribute("selected", "true");
        topicInputForm.appendChild(topicOption4);

        const messageContainer = document.createElement('div');
        messageContainer.classList.add('inputContainer');
        const messageLabelForm = document.createElement('label');
        messageLabelForm.setAttribute("for", "message");
        messageLabelForm.textContent = "Message";
        messageContainer.appendChild(messageLabelForm);
        const messageInputForm = document.createElement('textarea');
        messageInputForm.setAttribute("name", "message");
        messageInputForm.setAttribute("id", "message");
        messageInputForm.setAttribute("required","true");
        messageInputForm.setAttribute("rows","5");
        messageContainer.appendChild(messageInputForm);

        const button = document.createElement('button');
        button.textContent = "Send it";
        button.setAttribute("type", "submit");

        contactFormContainer.appendChild(nameContainer);
        contactFormContainer.appendChild(emailContainer);
        contactFormContainer.appendChild(topicContainer);
        contactFormContainer.appendChild(messageContainer);
        contactFormContainer.appendChild(button);

        contactForm.appendChild(contactFormContainer);

        return contactForm;

    }

    function contactInfo() {
        const contactInfo = document.createElement('section');
        contactInfo.classList.add('contactInfo');

        const phone = document.createElement('div');
        const phoneTitle = document.createElement('div');
        phoneTitle.textContent = "Phone";
        phone.appendChild(phoneTitle);
        const phoneContent = document.createElement('p');
        phoneContent.textContent = "555-555-5555";
        phone.appendChild(phoneContent);

        const email = document.createElement('div');
        const emailTitle = document.createElement('div');
        emailTitle.textContent = "Email";
        email.appendChild(emailTitle);
        const emailContent = document.createElement('p');
        emailContent.textContent = "krustykrab@bb.com";
        email.appendChild(emailContent);

        const address = document.createElement('div');
        const addressTitle = document.createElement('div');
        addressTitle.textContent = "Address";
        address.appendChild(addressTitle);
        const addressContent = document.createElement('p');
        addressContent.textContent = `831 Bottom Feeder Lane \r\n Bikini Bottom, Pacific Ocean`;
        address.appendChild(addressContent);

        const hours = document.createElement('div');
        const hoursTitle = document.createElement('div');
        hoursTitle.textContent = "Hours";
        hours.appendChild(hoursTitle);
        const hoursContent = document.createElement('p');
        hoursContent.textContent = `Monday-Thursday \r\n 11:00 am - 09:00 pm \r\n \r\n Friday-Sunday \r\n 10:00 am - 11:00 pm`;
        hours.appendChild(hoursContent);

        contactInfo.appendChild(phone);
        contactInfo.appendChild(email);
        contactInfo.appendChild(address);
        contactInfo.appendChild(hours);

        return contactInfo;
    }

    function contactSection(){
        const contactSection = document.createElement('section');
        contactSection.classList.add('contactSection');

        contactSection.appendChild(contactForm());
        contactSection.appendChild(contactInfo());

        return contactSection;
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
    container.appendChild(contactSection());
    container.appendChild(footer());

    return container;
}

export default page_load;