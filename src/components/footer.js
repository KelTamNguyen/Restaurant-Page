export default function footer() {
  const content = document.getElementById('content');
  const footerElement = document.createElement('footer');
  footerElement.innerHTML = `
      <div id="attribution-grid">
          <a class="attribution" href="https://www.flaticon.com/free-icons/cookie" title="cookie icons" target="_blank" rel="noreferrer noopener">
              Cookie icons created by Freepik - Flaticon
          </a>
          <a class="attribution" href="https://www.flaticon.com/free-icons/clock" title="clock icons" target="_blank" rel="noreferrer noopener">
              Clock icons created by Ilham Fitrotul Hayat - Flaticon
          </a>
          <a class="attribution" href="https://www.flaticon.com/free-icons/gps" title="gps icons" target="_blank" rel="noreferrer noopener">
              Gps icons created by Freepik - Flaticon
          </a>
          <a class="attribution" href="https://www.flaticon.com/free-icons/telephone" title="telephone icons" target="_blank" rel="noreferrer noopener">
              Telephone icons created by Ilham Fitrotul Hayat - Flaticon
          </a>
          <a class="attribution" href="https://www.flaticon.com/free-icons/email" title="email icons" target="_blank" rel="noreferrer noopener">
              Email icons created by Ilham Fitrotul Hayat - Flaticon
          </a>
      </div>
      <p>Copyright &copy; 2022 Kelvin Nguyen</p>
      <a href="https://github.com/KelTamNguyen" target="_blank" rel="noreferrer noopener">
          <i class="fab fa-github-square fa-lg"></i>
      </a>
  `;

  content.appendChild(footerElement);
}
