export default function navbar() {
    const content = document.getElementById('content');

    const navbar = document.createElement('nav');

    const logo = document.createElement('h1');
    logo.textContent = 'La Pâtisserie';

    const navLinks = document.createElement('ul');
    navLinks.id = 'nav-links';
    navLinks.type = 'none';
    let home = document.createElement('li');
    let homeLink = document.createElement('a');
    homeLink.textContent = 'Home';
    home.appendChild(homeLink);
    let menu = document.createElement('li');
    let menuLink = document.createElement('a');
    menuLink.textContent = 'Menu';
    menu.appendChild(menuLink);
    let contact = document.createElement('li');
    let contactLink = document.createElement('a');
    contactLink.textContent = 'Contact';
    contact.appendChild(contactLink);
    navLinks.appendChild(home);
    navLinks.appendChild(menu);
    navLinks.appendChild(contact);

    navbar.appendChild(logo);
    navbar.appendChild(navLinks);

    content.appendChild(navbar);
}
