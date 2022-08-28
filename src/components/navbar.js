export default function navbar() {
    const content = document.getElementById('content');

    const navbar = document.createElement('nav');

    const logo = document.createElement('h1');
    logo.textContent = 'La Pâtisserie';

    const navLinks = document.createElement('ul');
    navLinks.id = 'nav-links';
    navLinks.type = 'none';
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
    navbar.appendChild(navLinks);

    content.appendChild(navbar);
}
