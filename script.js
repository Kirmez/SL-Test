const btn = document.querySelector(".nav-top__burger");
const sidebar = document.querySelector('.nav');

btn.addEventListener('click', function() {
    sidebar.classList.toggle('active')
})