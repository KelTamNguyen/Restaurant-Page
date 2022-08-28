import clearContent from "./clearContent";
import footer from "../components/footer";
import '../styles/contact.css';
import '../styles/footer.css';

export default function loadContact(){
    clearContent();
    const content = document.getElementById('content');

    const contacts = document.createElement('section');
    contacts.id = 'contacts';
    let contanctsTitle = document.createElement('h1');
    contanctsTitle.classList.add('section-title');
    contanctsTitle.textContent = 'Contact Us';
    contacts.appendChild(contanctsTitle);

    let contactsContainer = document.createElement('div');
    contactsContainer.id = 'contacts-container';
    let info = document.createElement('div');
    info.id = 'contact-info';
    let address = document.createElement('p');
    address.textContent = '376 1st St, Brooklyn, NY 11215';
    info.appendChild(address);
    let phoneNumber = document.createElement('p');
    phoneNumber.textContent = '123-456-7890';
    info.appendChild(phoneNumber);
    let hours = document.createElement('p');
    hours.innerHTML = 'Wednesday - Monday: 8AM - 5PM <br> Tuesday: CLOSED';
    info.appendChild(hours);
    contactsContainer.appendChild(info);
    contacts.appendChild(contactsContainer);
    let map = document.createElement('div');
    map.id = 'map';
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.053098867051!2d-73.98240988475965!3d40.67279897933621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b004c6161b3%3A0x380642c0da0bcb69!2s376%201st%20St%2C%20Brooklyn%2C%20NY%2011215!5e0!3m2!1sen!2sus!4v1661641054457!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    contactsContainer.appendChild(map);

    content.appendChild(contacts);

    // load footer component
    footer();
}