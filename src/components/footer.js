export default function footer() {
    const content = document.getElementById('content');
    const footer = document.createElement('footer');
    let attributionLink = document.createElement('a');
    attributionLink.classList.add('attribution')
    attributionLink.href = 'https://www.flaticon.com/free-icons/cookie';
    attributionLink.title = 'cookie icons';
    attributionLink.target = '_blank';
    attributionLink.rel = 'noreferrer noopener';
    attributionLink.textContent = 'Cookie icons created by Freepik - Flaticon';
    footer.appendChild(attributionLink);
    let address = document.createElement('p');
    address.textContent = '376 1st St. | New York, NY 10028';
    footer.appendChild(address);
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