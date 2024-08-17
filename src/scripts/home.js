import Background from '../assets/page-background.jpg';
export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome Aboard The Thai-Tanic!';


    const p = document.createElement('p');
    p.textContent = 'Embark on a Culinary Voyage!';

    content.appendChild(h1);
    content.appendChild(p);
}