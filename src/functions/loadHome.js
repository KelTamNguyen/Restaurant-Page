import clearContent from "./clearContent";
import footer from "../components/footer";
import loadMenu from "./loadMenu";
import '../styles/home.css'
import '../styles/footer.css';

export default function loadHome() {
    clearContent();
    
    const content = document.getElementById('content');

    // hero section
    const heroSection = document.createElement('section');
    heroSection.id = 'hero';

    const messageDiv = document.createElement('div');
    messageDiv.id = 'message';
    let callToAction = document.createElement('h1');
    callToAction.id = 'cta';
    callToAction.textContent = 'Every moment with a cookie';
    messageDiv.appendChild(callToAction);
    let subtitle = document.createElement('h2');
    subtitle.id = 'subtitle';
    subtitle.textContent = '...is a moment of joy!';
    messageDiv.appendChild(subtitle);
    let menuBtn = document.createElement('button');
    menuBtn.textContent = "Let's have some!";
    menuBtn.addEventListener('click', loadMenu);
    messageDiv.appendChild(menuBtn);

    heroSection.appendChild(messageDiv);

    content.appendChild(heroSection);

    // About section
    const aboutSection = document.createElement('section');
    aboutSection.id = 'about';
    let aboutTitle = document.createElement('h1');
    aboutTitle.classList.add('section-title');
    aboutTitle.textContent = 'About Us'
    aboutSection.appendChild(aboutTitle);

    let aboutContainer = document.createElement('div');
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
    
    // const hoursContainer = document.createElement('div');
    // hoursContainer.id = 'hours-container';
    // let monday = document.createElement('p');
    // monday.textContent = 'Monday 8AM-5PM';
    // hoursContainer.appendChild(monday);
    // let tuesday = document.createElement('p');
    // tuesday.textContent = 'Tuesday CLOSED';
    // hoursContainer.appendChild(tuesday);
    // let wednesday = document.createElement('p');
    // wednesday.textContent = 'Wednesday 8AM-5PM';
    // hoursContainer.appendChild(wednesday);
    // let thursday = document.createElement('p');
    // thursday.textContent = 'Thursday 8AM-5PM';
    // hoursContainer.appendChild(thursday);
    // let friday = document.createElement('p');
    // friday.textContent = 'Fridday 8AM-5PM';
    // hoursContainer.appendChild(friday);
    // let saturday = document.createElement('p');
    // saturday.textContent = 'Saturday 8AM-5PM';
    // hoursContainer.appendChild(saturday);
    // let sunday = document.createElement('p');
    // sunday.textContent = 'Sunday 8AM-5PM';
    // hoursContainer.appendChild(sunday);
    // aboutSection.appendChild(hoursContainer);
    
    content.appendChild(aboutSection);

    // load footer component
    footer();
}

