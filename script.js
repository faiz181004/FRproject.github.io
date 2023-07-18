const click = document.querySelector('.click input');
const nav = document.querySelector('nav ul');

click.addEventListener('click', function () {
    nav.classList.toggle('slide');
});