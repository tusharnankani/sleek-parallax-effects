// Scrolling effects for parallax - To be completed
const header = document.querySelector('.logo');

window.addEventListener('scroll', () => {
    let scrollPos = window.scrollY;
    // console.log(scrollPos);
    header.style.transform = `${scrollPos + 100}%`;
});