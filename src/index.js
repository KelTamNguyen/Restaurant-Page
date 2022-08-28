import footer from "./components/footer";
import initialPageLoad from "./functions/initialPageLoad";
import loadHome from './functions/loadHome';
import loadMenu from "./functions/loadMenu";
import loadContact from "./functions/loadContact";

function addNavEvents() {
    const home = document.getElementById('home');
    const menu = document.getElementById('menu');
    const contact = document.getElementById('contact');
    home.addEventListener('click', loadHome);

    menu.addEventListener('click', loadMenu);

    contact.addEventListener('click', loadContact);
}

function main() {
    initialPageLoad();
    addNavEvents();
}

main();