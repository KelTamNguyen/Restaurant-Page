import clearContent from './clearContent';
import footer from '../components/footer';
import loadMenu from './loadMenu';

export default function loadHome() {
  clearContent();
  window.scroll(0, 0);

  const content = document.getElementById('content');

  // hero section
  const heroSection = document.createElement('section');
  heroSection.id = 'hero';

  const messageDiv = document.createElement('div');
  messageDiv.id = 'message';
  const callToAction = document.createElement('h1');
  callToAction.id = 'cta';
  callToAction.textContent = 'Every moment with a cookie';
  messageDiv.appendChild(callToAction);
  const subtitle = document.createElement('h2');
  subtitle.id = 'subtitle';
  subtitle.textContent = '...is a moment of joy!';
  messageDiv.appendChild(subtitle);
  const menuBtn = document.createElement('button');
  menuBtn.textContent = "Let's have some!";
  menuBtn.addEventListener('click', () => {
    const homeLink = document.getElementById('home');
    const menuLink = document.getElementById('menu');
    homeLink.classList.remove('active');
    menuLink.classList.add('active');
    loadMenu();
  });
  messageDiv.appendChild(menuBtn);

  heroSection.appendChild(messageDiv);

  content.appendChild(heroSection);

  // About section
  const aboutSection = document.createElement('section');
  aboutSection.id = 'about';
  const aboutTitle = document.createElement('h1');
  aboutTitle.classList.add('section-title');
  aboutTitle.textContent = 'About Us';
  aboutSection.appendChild(aboutTitle);

  const aboutContainer = document.createElement('div');
  aboutContainer.classList.add('about-content');
  aboutContainer.innerHTML = `
        <div>
            <div>
                <h1 class="about-header">Who Are We?</h1>
                <p class="about-paragraph">
                    We are La Pâtisserie, a bakery specializing in cookies since 1969. 
                </p>
            </div>
            <div>
                <h1 class="about-header">Why Cookies?</h1>
                <p class="about-paragraph">
                    Few things bring as much simple joy as a freshly 
                    baked cookie. Some may think cakes and tarts too 
                    time-consuming to make, or consider other fancy desserts 
                    too filling or complicated, but hardly anyone refuses a 
                    cookie. At La Pâtisserie, we are dedicated to the simple 
                    pleasures of pastries.
                </p>
            </div>
        </div>
    `;

  aboutSection.appendChild(aboutContainer);
  content.appendChild(aboutSection);

  // load footer component
  footer();
}
