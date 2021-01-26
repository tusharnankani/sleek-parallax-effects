// Meteor Creation 
const animatedSection = document.querySelector('.animated-area');

function createMeteors() {

    // creation of meteors using --> span.meteor
    const meteor = document.createElement('span');
    meteor.classList.add('meteor')

    // starting it from right top corner; styling it from left;
    meteor.style.left = Math.random() * (innerWidth + 500) + 'px';

    // random length of meteor b/w 160 and 160 + 70 = 230
    meteor.style.height = Math.floor(Math.random() * 160) + 70 + 'px';
    // random width of meteor b/w 1 and 3
    meteor.style.width = Math.floor(Math.random() * 1) + 2 + 'px';


    animatedSection.append(meteor);

    // remove the span after 4 seconds;
    setTimeout(() => {
        meteor.remove();
    }, 4000);
}

// createMeteors() function will run every 500ms;
setInterval(createMeteors, 500);