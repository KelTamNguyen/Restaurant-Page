import clearContent from "./clearContent";
import footer from "../components/footer";
import '../styles/menu.css';
import '../styles/footer.css';
import blackAndWhite from '../assets/cookies/black-and-white-cookie.jpg';

export default function loadMenu() {
    clearContent();
    const content = document.getElementById('content');

    let menuSection = document.createElement('section');
    menuSection.classList.add('menu-section');
    menuSection.innerHTML = `
        <h1 class="section-title">Menu</h1>
        <div class="menu-grid" id="menu-grid">
            <div class="menu-item">
                <img src="${blackAndWhite}">
                <div class="item-description">
                    <p class="item-desc">black and white cookie</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="${blackAndWhite}">
                <div class="item-description">
                    <p class="item-desc">black and white cookie</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="${blackAndWhite}">
                <div class="item-description">
                    <p class="item-desc">black and white cookie</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="${blackAndWhite}">
                <div class="item-description">
                    <p class="item-desc">black and white cookie</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="${blackAndWhite}">
                <div class="item-description">
                    <p class="item-desc">black and white cookie</p>
                </div>
            </div>
            <div class="menu-item">
                <img src="${blackAndWhite}">
                <div class="item-description">
                    <p class="item-desc">black and white cookie</p>
                </div>
            </div>
        </div>
    `;

    content.appendChild(menuSection);

    // load footer component
    footer();
}