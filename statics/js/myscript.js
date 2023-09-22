window.addEventListener('scroll', function() {
    var header = document.querySelector('.header-wrapper');
    if (window.scrollY > 200) { // Adjust the scroll threshold as needed
        header.classList.add('navbar-scrolled');
    } else {
        header.classList.remove('navbar-scrolled');
    }
});