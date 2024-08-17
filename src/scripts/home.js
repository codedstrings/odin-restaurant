import Background from '../assets/page-background.jpg';
export function loadHome() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'Welcome to Our Restaurant';

    const bgImage = new Image();
    bgImage.src = Background;


    const p = document.createElement('p');
    p.textContent = 'Experience the finest cuisine in town at our cozy and elegant restaurant.';

    content.appendChild(h1);
    // content.appendChild(bgImage);
    content.appendChild(p);
}