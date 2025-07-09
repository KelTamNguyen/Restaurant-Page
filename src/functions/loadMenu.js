import clearContent from './clearContent';
import footer from '../components/footer';
import blackAndWhite from '../assets/cookies/black-and-white-cookie.jpg';
import chineseAlmond from '../assets/cookies/almond-cookies.jpg';
import macaroons from '../assets/cookies/macaroons.jpg';
import chocoChip from '../assets/cookies/chocolate-chip-cookie.jpg';
import pbBlossom from '../assets/cookies/peanut-butter-blossom.jpg';
import granolaBar from '../assets/cookies/granola-bar.jpg';
import blondie from '../assets/cookies/blondie.jpg';
import brownie from '../assets/cookies/brownie.jpg';
import nanaimo from '../assets/cookies/nanaimo-bar.jpg';
import gingersnap from '../assets/cookies/gingersnap.jpg';
import jamThumbprint from '../assets/cookies/jam-thumbprints.jpg';
import pizzelle from '../assets/cookies/pizzelles.jpg';

export default function loadMenu() {
  clearContent();
  window.scroll(0, 0);

  const content = document.getElementById('content');

  const menuSection = document.createElement('section');
  menuSection.classList.add('menu-section');
  menuSection.innerHTML = `
      <h1 id="menu-title">Menu</h1>
      <div id="menu-container">
          <div class="menu-category">
              <h1>Drop Cookies</h1>
              <div class="menu-grid">
                  <div class="menu-item">
                      <img src="${blackAndWhite}" alt="Black And White Cookie">
                      <div class="item-description">
                          <p class="item-title">Black And White Cookie</p>
                          <p>99&cent/cookie</p>
                      </div>
                  </div>
                  <div class="menu-item">
                      <img src="${chineseAlmond}" alt="Chinese Almond Cookie">
                      <div class="item-description">
                          <p class="item-title">Chinese Almond Cookie</p>
                          <p>99&cent/cookie</p>
                      </div>
                  </div>
                  <div class="menu-item">
                      <img src="${macaroons}" alt="Macaroon">
                      <div class="item-description">
                          <p class="item-title">Macaroon</p>
                          <p>99&cent/cookie</p>
                      </div>
                  </div>
                  <div class="menu-item">
                      <img src="${chocoChip}" alt="Chocolate Chip Cookie">
                      <div class="item-description">
                          <p class="item-title">Chocolate Chip Cookie</p>
                          <p>99&cent/cookie</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="menu-category">
              <h1>Bar Cookies</h1>
              <div class="menu-grid">
                  <div class="menu-item">
                      <img src="${blondie}" alt="Blondie">
                      <div class="item-description">
                          <p class="item-title">Blondie</p>
                          <p>99&cent/bar</p>
                      </div>
                  </div>
                  <div class="menu-item">
                      <img src="${brownie}" alt="Brownie">
                      <div class="item-description">
                          <p class="item-title">Brownie</p>
                          <p>99&cent/bar</p>
                      </div>
                  </div>
                  <div class="menu-item">
                      <img src="${granolaBar}" alt="Granola Bar">
                      <div class="item-description">
                          <p class="item-title">Granola Bar</p>
                          <p>99&cent/bar</p>
                      </div>
                  </div>
                  <div class="menu-item">
                      <img src="${nanaimo}" alt="Nanaimo Bar">
                      <div class="item-description">
                          <p class="item-title">Nanaimo Bar</p>
                          <p>99&cent/bar</p>
                      </div>
                  </div>
              </div>
          </div>
          <div class="menu-category">
              <h1>Molded Cookies</h1>
              <div class="menu-grid">
                  <div class="menu-item">
                      <img src=${pbBlossom} alt="Peanut Butter Blossom">
                      <div class="item-description">
                          <p class="item-title">Peanut Butter Blossom</p>
                          <p>99&cent/cookie</p>
                      </div>
                  </div>
                  <div class="menu-item">
                      <img src=${gingersnap} alt="Gingersnap">
                      <div class="item-description">
                          <p class="item-title">Gingersnap</p>
                          <p>99&cent/cookie</p>
                      </div>
                  </div>
                  <div class="menu-item">
                      <img src=${jamThumbprint} alt="Jam Thumbprint">
                      <div class="item-description">
                          <p class="item-title">Jam Thumbprint</p>
                          <p>99&cent/cookie</p>
                      </div>
                  </div>
                  <div class="menu-item">
                      <img src=${pizzelle} alt="Pizzelle">
                      <div class="item-description">
                          <p class="item-title">Pizzelle</p>
                          <p>99&cent/cookie</p>
                      </div>
                  </div>
              </div>
          </div>
      </div>
  `;

  content.appendChild(menuSection);

  // load footer component
  footer();
}
