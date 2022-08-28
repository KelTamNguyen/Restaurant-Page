import clearContent from "./clearContent";
import footer from "../components/footer";
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
    callToAction.textContent = 'Let us eat cake!';
    messageDiv.appendChild(callToAction);
    let subtitle = document.createElement('h2');
    subtitle.id = 'subtitle';
    subtitle.textContent = '...or cookies!';
    messageDiv.appendChild(subtitle);

    heroSection.appendChild(messageDiv);

    content.appendChild(heroSection);

    // Hours section
    const hoursSection = document.createElement('section');
    hoursSection.id = 'hours';
    let hoursTitle = document.createElement('h1');
    hoursTitle.classList.add('section-title');
    hoursTitle.textContent = 'Hours'
    hoursSection.appendChild(hoursTitle);
    
    const hoursContainer = document.createElement('div');
    hoursContainer.id = 'hours-container';
    let monday = document.createElement('p');
    monday.textContent = 'Monday 8AM-5PM';
    hoursContainer.appendChild(monday);
    let tuesday = document.createElement('p');
    tuesday.textContent = 'Tuesday CLOSED';
    hoursContainer.appendChild(tuesday);
    let wednesday = document.createElement('p');
    wednesday.textContent = 'Wednesday 8AM-5PM';
    hoursContainer.appendChild(wednesday);
    let thursday = document.createElement('p');
    thursday.textContent = 'Thursday 8AM-5PM';
    hoursContainer.appendChild(thursday);
    let friday = document.createElement('p');
    friday.textContent = 'Fridday 8AM-5PM';
    hoursContainer.appendChild(friday);
    let saturday = document.createElement('p');
    saturday.textContent = 'Saturday 8AM-5PM';
    hoursContainer.appendChild(saturday);
    let sunday = document.createElement('p');
    sunday.textContent = 'Sunday 8AM-5PM';
    hoursContainer.appendChild(sunday);
    hoursSection.appendChild(hoursContainer);
    
    content.appendChild(hoursSection);

    // load footer component
    footer();
}

