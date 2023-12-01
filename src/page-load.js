import './style.css';
import Home from './home.js';
import Menu from './menu.js';
import Contact from './contact.js';

export default function pageLoad(container) {
    const headline = document.createElement('h1');
    
    headline.innerHTML = 'This is my Restaurant';
    headline.classList.add('headline');

    container.classList.add('container');

    const navbar = document.createElement('div');
    navbar.classList.add('navbar');

    const navList = document.createElement('ul');
    navList.classList.add('navList');


    const homeListItem = document.createElement('li');
    homeListItem.classList.add('navItem');
    homeListItem.innerHTML = 'Home';
    const menuListItem = document.createElement('li');
    menuListItem.classList.add('navItem');
    menuListItem.innerHTML = 'Menu';
    const contactListItem = document.createElement('li');
    contactListItem.classList.add('navItem');
    contactListItem.innerHTML = 'Contact';

    function addListener(...args) {
        args.forEach(el => {
            el.addEventListener('mouseover', () => el.style.cursor = 'pointer');
            el.addEventListener('click', () => {
                removeAllChildNodes(info);
                if(el.innerHTML === 'Home') 
                    info.appendChild(Home());
                else if(el.innerHTML === 'Menu')
                    info.appendChild(Menu());
                    else info.appendChild(Contact());
                
            });
        });
    }

    function removeAllChildNodes(parent) {
        while(parent.firstChild) {
            parent.removeChild(parent.firstChild);
        }
    }

    addListener(homeListItem, menuListItem, contactListItem);

    //add event listeners


    const info = document.createElement('div');
    info.classList.add('info');

    container.appendChild(headline);
    navList.appendChild(homeListItem);
    navList.appendChild(menuListItem);
    navList.appendChild(contactListItem);
    navbar.appendChild(navList);
    container.appendChild(navbar);
    container.appendChild(info);

    info.appendChild(Home());
}