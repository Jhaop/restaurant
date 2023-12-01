import './style.css';

export default function Contact(){
    const myContact = document.createElement('div');
    myContact.classList.add('contact');


    const phoneContact = document.createElement('div');
    phoneContact.classList.add('phoneContact');

    const whatsappImage = document.createElement('img');
    whatsappImage.classList.add('whatsappImage');
    const whatsappNumber = document.createElement('p');
    whatsappNumber.classList.add('details');
    whatsappNumber.innerHTML = '54 11 1111111111';

    const whatsappContactContainer = document.createElement('div');
    whatsappContactContainer.classList.add('phoneContactContainer');

    whatsappContactContainer.appendChild(whatsappImage);
    whatsappContactContainer.appendChild(whatsappNumber);

    phoneContact.appendChild(whatsappContactContainer);

    const telegramImage = document.createElement('img'); 
    telegramImage.classList.add('telegramImage');
    const telegramNumber = document.createElement('p');
    telegramNumber.classList.add('details');
    telegramNumber.innerHTML = '54 11 1111111111'; 

    const telegramContactContainer = document.createElement('div');
    telegramContactContainer.classList.add('phoneContactContainer');

    telegramContactContainer.appendChild(telegramImage);
    telegramContactContainer.appendChild(telegramNumber);

    phoneContact.appendChild(telegramContactContainer);

    const facebookImage = document.createElement('img');
    facebookImage.classList.add('facebookImage');
    const facebookAdress = document.createElement('a');
    facebookAdress.classList.add('link');
    facebookAdress.href = 'https://facebook.com/myfakerestaurant';
    facebookAdress.innerHTML = 'facebook.com/myfakerestaurant';

    const facebookContactContainer = document.createElement('div');
    facebookContactContainer.classList.add('phoneContactContainer');

    facebookContactContainer.appendChild(facebookImage);
    facebookContactContainer.appendChild(facebookAdress);

    phoneContact.appendChild(facebookContactContainer);


    const instagramImage = document.createElement('img');
    instagramImage.classList.add('instagramImage');
    const instagramAddress = document.createElement('a');
    instagramAddress.classList.add('link');
    instagramAddress.hred = 'https://instagram.com/trulyfakerestaurant';
    instagramAddress.innerHTML = 'instagram.com/trulyfakerestaurant';

    const instagramContactContainer = document.createElement('div');
    instagramContactContainer.classList.add('phoneContactContainer');

    instagramContactContainer.appendChild(instagramImage);
    instagramContactContainer.appendChild(instagramAddress);

    phoneContact.appendChild(instagramContactContainer);


    const twitterImage = document.createElement('img');
    twitterImage.classList.add('twitterImage');
    const twitterAddress = document.createElement('a');
    twitterAddress.classList.add('link');
    twitterAddress.href = 'https://twitter.com/fakefakerestaurant';
    twitterAddress.innerHTML = 'twitter.com/fakefakerestaurant';

    const twitterContactContainer = document.createElement('div');
    twitterContactContainer.classList.add('phoneContactContainer');

    twitterContactContainer.appendChild(twitterImage);
    twitterContactContainer.appendChild(twitterAddress);

    phoneContact.appendChild(twitterContactContainer);


   

  
    myContact.appendChild(phoneContact);




 




    return myContact;
}