export default function navbar() {
    // const content = document.getElementById('content');
    const body = document.getElementsByTagName('body')[0];

    const navbar = document.createElement('nav');
    navbar.innerHTML = `
        <h1 class="logo">La Pâtisserie</h1>
        <button class="hamburger" id="hamburger">
            <i class="fas fa-bars"></i>
        </button>
        <ul id="nav-links" class="nav-links">
            <li id="home" class="active">Home</li>
            <li id="menu">Menu</li>
            <li id="contact">Contact</li>
        </ul>
    `;

    // content.appendChild(navbar);
    body.prepend(navbar);
}