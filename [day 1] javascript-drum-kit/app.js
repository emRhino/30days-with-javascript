(function(window){

    'use strict';

    window.addEventListener('keydown', function(e){
        const audio = document.querySelector(`audio[data-key="${e.keyCode}"]`);
        const key = document.querySelector(`.key[data-key="${e.keyCode}"]`);

        if (!audio) return;

        audio.currentTime = 0;
        audio.play();
        
        key.classList.add('pressed');
    })

    function removeTransition(e) {
        if (e.properytyname !== 'box-shadow') return;
    }

    const keys = document.querySelectorAll('.key');
    keys.forEach(key => key.addEventListener('transitionend', removeTransition))

}(window));
