const menuToggle = document.querySelector('.menu-toggle input');
const nav = document.querySelector('nav ul');

// ketika hamburger menu di klik
menuToggle.addEventListener('click', function() {
    nav.classList.toggle('slide');
})

// klik di luar sidebar untuk menutup nav
menuToggle.addEventListener('click', function(e) {
    if(!menuToggle.contains(e.target) && !nav.contains(e.target)) {
        nav.classList.remove('slide');
    }
});