export default function navbar() {
    const content = document.getElementById('content');

    const navbar = document.createElement('nav');

    const logo = document.createElement('h1');
    logo.classList.add('logo');
    logo.textContent = 'La Pâtisserie';

    const hamburger = document.createElement('button');
    hamburger.classList.add('hamburger');
    hamburger.id = 'hamburger';
    hamburger.innerHTML = '<i class="fas fa-bars"></i>';

    const navLinks = document.createElement('ul');
    navLinks.id = 'nav-links';
    navLinks.type = 'none';
    navLinks.classList.add('nav-links');

    let home = document.createElement('li');
    home.id = 'home';
    let homeLink = document.createElement('span');
    homeLink.textContent = 'Home';
    home.appendChild(homeLink);

    let menu = document.createElement('li');
    menu.id = 'menu';
    let menuLink = document.createElement('span');
    menuLink.textContent = 'Menu';
    menu.appendChild(menuLink);

    let contact = document.createElement('li');
    contact.id = 'contact';
    let contactLink = document.createElement('span');
    contactLink.textContent = 'Contact';
    contact.appendChild(contactLink);

    navLinks.appendChild(home);
    navLinks.appendChild(menu);
    navLinks.appendChild(contact);

    navbar.appendChild(logo);
    navbar.appendChild(hamburger);
    navbar.appendChild(navLinks);

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('show');
    });

    content.appendChild(navbar);
}