import { loadHome } from './home';
import { loadMenu } from './menu';
import { loadAbout } from './about';
import '../styles.css';

function setActiveButton(button) {
    const buttons = document.querySelectorAll('button');
    buttons.forEach(btn => btn.classList.remove('active'));
    button.classList.add('active');
}

document.addEventListener('DOMContentLoaded', () => {
    loadHome();

    const homeBtn = document.querySelector('.homeBtn');
    const menuBtn = document.querySelector('.menuBtn');
    const aboutBtn = document.querySelector('.aboutBtn');

    homeBtn.addEventListener('click', () => {
        loadHome();
        setActiveButton(homeBtn);
    });

    menuBtn.addEventListener('click', () => {
        loadMenu();
        setActiveButton(menuBtn);
    });

    aboutBtn.addEventListener('click', () => {
        loadAbout();
        setActiveButton(aboutBtn);
    });
});