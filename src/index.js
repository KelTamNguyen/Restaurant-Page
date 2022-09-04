import footer from "./components/footer";
import initialPageLoad from "./functions/initialPageLoad";
import loadHome from './functions/loadHome';
import loadMenu from "./functions/loadMenu";
import loadContact from "./functions/loadContact";

function addNavEvents() {
    const navLinks = document.getElementById('nav-links');
    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');
    home.addEventListener('click', () => {
        navLinks.classList.remove('show');
        loadHome()
    });

    menu.addEventListener('click', () => {
        navLinks.classList.remove('show');
        loadMenu()
    });

    contact.addEventListener('click', () => {
        navLinks.classList.remove('show');
        loadContact()
    });
}

function main() {
    initialPageLoad();
    addNavEvents();
}

main();