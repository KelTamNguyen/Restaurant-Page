import clearContent from "./clearContent";
import footer from "../components/footer";
import '../styles/menu.css';
import '../styles/footer.css';

export default function loadMenu() {
    clearContent();
    const content = document.getElementById('content');

    // laod footer component
    footer();
}