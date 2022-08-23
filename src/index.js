import './styles/navbar.css';
import './styles/home.css'
import './styles/footer.css';
import navbar from './components/navbar';
import footer from './components/footer';
import home from './home';

function loadPage() {
    console.log('This site is built using Webpack!');

    navbar();
    home();
    footer();
}

loadPage();