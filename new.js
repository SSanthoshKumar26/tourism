document.addEventListener('DOMContentLoaded', function () {
    window.addEventListener('scroll', function () {
        var welcomeSection = document.querySelector('.one');
        var welcomeText = document.querySelector('.animat-text');
        var welcomeParagraph = document.querySelector('.text-muted');
        var windowHeight = window.innerHeight;
        var elementTop = welcomeSection.getBoundingClientRect().top;

        if (elementTop < windowHeight - 100) {
            welcomeSection.classList.add('visible');
            welcomeText.classList.add('visible');
            welcomeParagraph.classList.add('visible');
        } else {
            welcomeSection.classList.remove('visible');
            welcomeText.classList.remove('visible');
            welcomeParagraph.classList.remove('visible');
        }
    });
});
