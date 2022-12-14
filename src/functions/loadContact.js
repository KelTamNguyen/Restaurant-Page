import clearContent from './clearContent';
import footer from '../components/footer';
import location from '../assets/placeholder.png';
import phone from '../assets/phone-call.png';
import clock from '../assets/clock.png';
import envelope from '../assets/email.png';

export default function loadContact() {
  clearContent();
  window.scroll(0, 0);

  const content = document.getElementById('content');

  const contacts = document.createElement('section');
  contacts.id = 'contacts';

  const contanctsTitle = document.createElement('h1');
  contanctsTitle.classList.add('section-title');
  contanctsTitle.textContent = 'Contact Us';
  contacts.appendChild(contanctsTitle);

  const contactsContainer = document.createElement('div');
  contactsContainer.id = 'contacts-container';
  const info = document.createElement('div');
  info.id = 'contact-info';

  const phoneLine = document.createElement('div');
  phoneLine.classList.add('info-line');
  const phoneIcon = document.createElement('img');
  phoneIcon.classList.add('contact-icon');
  phoneIcon.src = phone;
  phoneLine.appendChild(phoneIcon);
  const phoneNumber = document.createElement('p');
  phoneNumber.textContent = '(123) 456-7890';
  phoneLine.appendChild(phoneNumber);
  info.appendChild(phoneLine);

  const hoursLine = document.createElement('div');
  hoursLine.classList.add('info-line');
  const clockIcon = document.createElement('img');
  clockIcon.classList.add('contact-icon');
  clockIcon.src = clock;
  hoursLine.appendChild(clockIcon);
  const hours = document.createElement('p');
  hours.innerHTML = 'Tuesday: CLOSED <br> Wednesday - Monday: 8AM - 5PM';
  hoursLine.appendChild(hours);
  info.appendChild(hoursLine);

  const mailForm = document.createElement('form');
  const formTitle = document.createElement('div');
  formTitle.classList.add('info-line');
  const envelopeIcon = document.createElement('img');
  envelopeIcon.classList.add('contact-icon');
  envelopeIcon.src = envelope;
  formTitle.appendChild(envelopeIcon);
  const formTitleMsg = document.createElement('h2');
  formTitleMsg.textContent = 'Message Us!';
  formTitle.appendChild(formTitleMsg);
  mailForm.appendChild(formTitle);

  const formGroup = document.createElement('div');
  formGroup.classList.add('form-group');
  const nameLabel = document.createElement('label');
  nameLabel.for = 'name';
  nameLabel.textContent = 'Name';
  formGroup.appendChild(nameLabel);
  const name = document.createElement('input');
  name.type = 'text';
  name.id = 'name';
  name.placeholder = 'Enter your name';
  // name.required = true;
  formGroup.appendChild(name);
  const emailLabel = document.createElement('label');
  emailLabel.for = 'email';
  emailLabel.textContent = 'Email';
  formGroup.appendChild(emailLabel);
  const email = document.createElement('input');
  email.type = 'email';
  email.id = 'email';
  email.placeholder = 'Enter your email';
  // email.required = true;
  formGroup.appendChild(email);
  const messageLabel = document.createElement('label');
  messageLabel.for = 'Message';
  messageLabel.textContent = 'Feedback';
  formGroup.appendChild(messageLabel);
  const message = document.createElement('textarea');
  message.placeholder = 'Write Us Here!';
  message.cols = 60;
  message.rows = 8;
  formGroup.appendChild(message);
  const sendBtn = document.createElement('button');
  sendBtn.type = 'submit';
  sendBtn.textContent = 'Send';
  sendBtn.addEventListener('click', (e) => {
    e.preventDefault();
    mailForm.reset();
  });
  formGroup.appendChild(sendBtn);
  mailForm.appendChild(formGroup);
  info.appendChild(mailForm);

  contactsContainer.appendChild(info);
  contacts.appendChild(contactsContainer);

  const map = document.createElement('div');
  map.id = 'map';
  map.innerHTML = `
        <div class="info-line">
            <img class="contact-icon" src=${location}>
            <p>376 1st St, Brooklyn, NY 11215</p>
        </div>
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3026.053098867051!2d-73.98240988475965!3d40.67279897933621!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c25b004c6161b3%3A0x380642c0da0bcb69!2s376%201st%20St%2C%20Brooklyn%2C%20NY%2011215!5e0!3m2!1sen!2sus!4v1661641054457!5m2!1sen!2sus" width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
    `;
  contactsContainer.appendChild(map);

  content.appendChild(contacts);

  // load footer component
  footer();
}
