const nav = document.querySelector('.nav');

nav.addEventListener('click', (e) => {
    let parentEl = e.target.parentElement;
    parentEl.classList.toggle('color2');
});