import initialPageLoad from './functions/initialPageLoad';
import loadHome from './functions/loadHome';
import loadMenu from './functions/loadMenu';
import loadContact from './functions/loadContact';

(function () {
  initialPageLoad();
  const navLinks = document.getElementById('nav-links');
  const home = document.getElementById('home');
  const menu = document.getElementById('menu');
  const contact = document.getElementById('contact');
  const hamburger = document.getElementById('hamburger');

  navLinks.addEventListener('click', (e) => {
    if (e.target.tagName.toLowerCase() === 'li') {
      Array.from(navLinks.children).forEach((child) => {
        child.classList.remove('active');
      });
      e.target.classList.add('active');
    }
  });

  home.addEventListener('click', () => {
    navLinks.classList.remove('show');
    loadHome();
  });

  menu.addEventListener('click', () => {
    navLinks.classList.remove('show');
    loadMenu();
  });

  contact.addEventListener('click', () => {
    navLinks.classList.remove('show');
    loadContact();
  });

  hamburger.addEventListener('click', () => {
    navLinks.classList.toggle('show');
  });
}());
