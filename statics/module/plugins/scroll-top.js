document.addEventListener("DOMContentLoaded", function() {
    var lastScrollTop = 0;

    window.onscroll = function() {
        var currentScrollTop = window.scrollY || document.documentElement.scrollTop;

        if (currentScrollTop > lastScrollTop || currentScrollTop == 0) {
            // Scrolling down
            hideScrollButton();
        } else {
            // Scrolling up
            showScrollButton();
        }

        lastScrollTop = currentScrollTop <= 0 ? 0 : currentScrollTop;
    };
});

function showScrollButton() {
    var scrollButton = document.getElementById("scroll-to-top");
    scrollButton.style.visibility = "visible";
}

function hideScrollButton() {
    var scrollButton = document.getElementById("scroll-to-top");
    scrollButton.style.visibility = "hidden";
}

function scrollToTop() {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
   
    
}