import '../styles/navbar.css';
import navbar from '../components/navbar';
import loadHome from './loadHome';

export default function initialPageLoad() {
    console.log('Loaded the home page!');

    navbar();
    loadHome();
}