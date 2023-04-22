var audio = document.getElementById('audio');

document.getElementById("enter").addEventListener("click", function() {
    
    const target = document.getElementById("enter");

    target.style.opacity = '0';
    target.addEventListener('transitionend', () => target.remove());

    if (typeof window.orientation == 'undefined') { 
        audio.play();
    }
});

// animate title
var title = document.querySelector('title');
title.innerHTML = '^-^';

const animation = [
    "^-^", 
    ":3",
    "^-^",
    ":3"
]

var i = 0;
setInterval(function() {
    title.innerHTML = animation[i];
    i = (i + 1) % animation.length;
}, 1000);
