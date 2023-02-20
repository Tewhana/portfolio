//Observer for motion
const observerOptions = {
    root: null,
    threshold: 0,
    rootMargin: '0px',
};

//fadeup class
const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
        if(entry.isIntersecting){
            entry.target.classList.add('in-view');
            observer.unobserve(entry.target);
        }
    });
}, observerOptions);

window.addEventListener('DOMContentLoaded', (event) => {
    const fadeups = Array.from(document.getElementsByClassName('fadeup'));
    for (let fadeup of fadeups) {
        observer.observe(fadeup);
    }
});