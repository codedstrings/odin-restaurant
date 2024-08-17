export function loadAbout() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'About Us';

    const p = document.createElement('p');
    p.textContent = 'We are passionate about great food and excellent service.';

    content.appendChild(h1);
    content.appendChild(p);
}