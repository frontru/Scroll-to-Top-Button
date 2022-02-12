button = document.querySelector('.btn');

window.onscroll = function() {
    scrollFunction()
};

function scrollFunction() {
    if (document.body.scrollTop > 500 || document.documentElement.scrollTop > 500) {
        button.classList.add('active');
    } else {
        button.classList.remove('active');
    }
}

function topFunction() {
    window.scrollTo({top: 0, behavior: 'smooth'});
}