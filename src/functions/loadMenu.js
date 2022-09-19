import clearContent from "./clearContent";
import footer from "../components/footer";
import '../styles/menu.css';
import '../styles/footer.css';
import blackAndWhite from '../assets/cookies/black-and-white-cookie.jpg';
import chineseAlmond from '../assets/cookies/almond-cookies.jpg';
import anzacBiscuit from '../assets/cookies/Anzac-Biscuits.jpg';
import macaroons from '../assets/cookies/macaroons.jpg';
import chocoChip from '../assets/cookies/chocolate-chip-cookie.jpg';

export default function loadMenu() {
    clearContent();
    window.scroll(0, 0);

    const content = document.getElementById('content');

    let menuSection = document.createElement('section');
    menuSection.classList.add('menu-section');
    menuSection.innerHTML = `
        <h1 id="menu-title">Menu</h1>
        <div id="menu-container">
            <div class="menu-grid" id="menu-grid">
                <div class="menu-item">
                    <img src="${blackAndWhite}">
                    <div class="item-description">
                        <p class="item-desc">black and white cookie</p>
                    </div>
                </div>
                <div class="menu-item">
                    <img src="${chineseAlmond}">
                    <div class="item-description">
                        <p class="item-desc">Chinese Almond Cookie</p>
                    </div>
                </div>
                <div class="menu-item">
                    <img src="${anzacBiscuit}">
                    <div class="item-description">
                        <p class="item-desc">ANZAC Biscuit</p>
                    </div>
                </div>
                <div class="menu-item">
                    <img src="${macaroons}">
                    <div class="item-description">
                        <p class="item-desc">Macaroon</p>
                    </div>
                </div>
                <div class="menu-item">
                    <img src="${chocoChip}">
                    <div class="item-description">
                        <p class="item-desc">Chocolate Chip Cookie</p>
                    </div>
                </div>
                <div class="menu-item">
                    <img src="${blackAndWhite}">
                    <div class="item-description">
                        <p class="item-desc">black and white cookie</p>
                    </div>
                </div>
            </div>
        </div>
    `;

    content.appendChild(menuSection);

    // load footer component
    footer();
}