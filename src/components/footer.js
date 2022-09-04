export default function footer() {
    const content = document.getElementById('content');
    const footer = document.createElement('footer');

    let attribution = document.createElement('div');
    attribution.id = 'attribution-grid';

    let cookieLink = document.createElement('a');
    cookieLink.classList.add('attribution');
    cookieLink.href = 'https://www.flaticon.com/free-icons/cookie';
    cookieLink.title = 'cookie icons';
    cookieLink.target = '_blank';
    cookieLink.rel = 'noreferrer noopener';
    cookieLink.textContent = 'Cookie icons created by Freepik - Flaticon';
    attribution.appendChild(cookieLink);
    let clockLink = document.createElement('a');
    clockLink.classList.add('attribution');
    clockLink.href= 'https://www.flaticon.com/free-icons/clock'
    clockLink.title = 'clock icons';
    clockLink.target = '_blank';
    clockLink.rel = 'noreferrer noopener';
    clockLink.textContent = 'Clock icons created by Ilham Fitrotul Hayat - Flaticon';
    attribution.appendChild(clockLink);
    let locationLink = document.createElement('a');
    locationLink.classList.add('attribution');
    locationLink.href= 'https://www.flaticon.com/free-icons/gps'
    locationLink.title = 'gps icons';
    locationLink.target = '_blank';
    locationLink.rel = 'noreferrer noopener';
    locationLink.textContent = 'Gps icons created by Freepik - Flaticon';
    attribution.appendChild(locationLink);
    let phoneLink = document.createElement('a');
    phoneLink.classList.add('attribution');
    phoneLink.title = 'phone call icons';
    phoneLink.target = '_blank';
    phoneLink.rel = 'noreferrer noopener';
    phoneLink.textContent = 'Phone call icons created by Ilham Fitrotul Hayat - Flaticon';
    attribution.appendChild(phoneLink);
    let emailLink = document.createElement('a');
    emailLink.classList.add('attribution');
    emailLink.title = 'email icons';
    emailLink.target= '_blank';
    emailLink.rel = 'noreferrer noopener';
    emailLink.textContent = 'Email icons created by Ilham Fitrotul Hayat - Flaticon';
    attribution.appendChild(emailLink);


    footer.appendChild(attribution);

    let copyright = document.createElement('p');
    copyright.innerHTML = 'Copyright &copy; 2022 Kelvin Nguyen ';
    let githubLink = document.createElement('a');
    githubLink.href = 'https://github.com/KelTamNguyen';
    githubLink.target = '_blank';
    githubLink.rel = 'noreferrer noopener';
    githubLink.innerHTML = '<i class="fab fa-github-square fa-lg"></i> ';
    footer.appendChild(copyright);
    footer.appendChild(githubLink);
    content.appendChild(footer);
}