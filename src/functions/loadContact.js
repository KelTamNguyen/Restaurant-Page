import clearContent from "./clearContent";
import footer from "../components/footer";
import '../styles/contact.css';
import '../styles/footer.css';
import location from '../assets/placeholder.png';
import phone from '../assets/phone-call.png';
import clock from '../assets/clock.png';
import envelope from '../assets/email.png';

export default function loadContact(){
    clearContent();
    const content = document.getElementById('content');

    const contacts = document.createElement('section');
    contacts.id = 'contacts';
    let contanctsTitle = document.createElement('h1');
    contanctsTitle.classList.add('section-title');
    contanctsTitle.textContent = 'Contact Us';
    contacts.appendChild(contanctsTitle);

    const contactsContainer = document.createElement('div');
    contactsContainer.id = 'contacts-container';
    let info = document.createElement('div');
    info.id = 'contact-info';

    const addressLine = document.createElement('div');
    addressLine.classList.add('info-line');
    let addressIcon = document.createElement('img');
    addressIcon.src = location;
    addressIcon.classList.add('contact-icon');
    addressLine.appendChild(addressIcon);
    let address = document.createElement('p');
    address.textContent = '376 1st St, Brooklyn, NY 11215';
    addressLine.appendChild(address);
    info.appendChild(addressLine);

    const phoneLine = document.createElement('div');
    phoneLine.classList.add('info-line');
    let phoneIcon = document.createElement('img');
    phoneIcon.classList.add('contact-icon');
    phoneIcon.src = phone;
    phoneLine.appendChild(phoneIcon);
    let phoneNumber = document.createElement('p');
    phoneNumber.textContent = '(123) 456-7890';
    phoneLine.appendChild(phoneNumber);
    info.appendChild(phoneLine);

    const hoursLine = document.createElement('div');
    hoursLine.classList.add('info-line');
    let clockIcon = document.createElement('img');
    clockIcon.classList.add('contact-icon');
    clockIcon.src = clock;
    hoursLine.appendChild(clockIcon);
    let hours = document.createElement('p');
    hours.innerHTML = 'Tuesday: CLOSED <br> Wednesday - Monday: 8AM - 5PM';
    hoursLine.appendChild(hours);
    info.appendChild(hoursLine);

    const mailForm = document.createElement('form');
    // mailForm.onsubmit = 'return false';
    let formTitle = document.createElement('div');
    formTitle.classList.add('info-line')
    let envelopeIcon = document.createElement('img');
    envelopeIcon.classList.add('contact-icon');
    envelopeIcon.src = envelope;
    formTitle.appendChild(envelopeIcon);
    let formTitleMsg = document.createElement('h2');
    formTitleMsg.textContent = 'Message Us!';
    formTitle.appendChild(formTitleMsg);
    mailForm.appendChild(formTitle);

    let formGroup = document.createElement('div');
    formGroup.classList.add('form-group');
    let nameLabel = document.createElement('label');
    nameLabel.for = 'name';
    nameLabel.textContent = 'Name';
    formGroup.appendChild(nameLabel);
    let name = document.createElement('input');
    name.type = 'text';
    name.id = 'name';
    name.placeholder = 'Enter your name';
    name.required = true;
    formGroup.appendChild(name);
    let emailLabel = document.createElement('label');
    emailLabel.for = 'email';
    emailLabel.textContent = 'Email';
    formGroup.appendChild(emailLabel);
    let email = document.createElement('input');
    email.type = 'email';
    email.id = 'email';
    email.placeholder = 'Enter your email';
    email.required = true;
    formGroup.appendChild(email);
    let messageLabel = document.createElement('label');
    messageLabel.for = 'Message';
    let message = document.createElement('textarea');
    message.placeholder = 'Write Us Here!'
    formGroup.appendChild(message);
    let sendBtn = document.createElement('button');
    sendBtn.type = 'submit';
    sendBtn.textContent = 'Send';
    formGroup.appendChild(sendBtn);
    mailForm.appendChild(formGroup);
    info.appendChild(mailForm);


    contactsContainer.appendChild(info);
    contacts.appendChild(contactsContainer);

    const map = document.createElement('div');
    map.id = 'map';
    map.innerHTML = '<iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.053098867051!2d-73.98240988475965!3d40.67279897933621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b004c6161b3%3A0x380642c0da0bcb69!2s376%201st%20St%2C%20Brooklyn%2C%20NY%2011215!5e0!3m2!1sen!2sus!4v1661641054457!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>'
    contactsContainer.appendChild(map);

    content.appendChild(contacts);

    // load footer component
    footer();
}