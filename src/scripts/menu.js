export function loadMenu() {
    const content = document.getElementById('content');
    content.innerHTML = '';

    const h1 = document.createElement('h1');
    h1.textContent = 'Our Menu';

    const p = document.createElement('p');
    p.textContent = 'Check out our delicious options!';

    content.appendChild(h1);
    content.appendChild(p);
}