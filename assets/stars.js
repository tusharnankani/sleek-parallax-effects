// star creation

const animatedSection = document.querySelector('.animated-area');

function createStars() {
  const star = document.createElement('span');
  star.classList.add('star');

  star.style.left = Math.random() * (innerWidth + 50) + 'px';
  star.style.top = Math.floor(Math.random() * 10) + 20 + 'px';

  animatedSection.append(star);

  setTimeout(() => { star.remove(); }, 4000);
}

setInterval(createStars, 10);