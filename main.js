let AllKeys = document.querySelectorAll('.key');
let nowPlaying = document.querySelector('.currentPlay');
let hints = document.querySelectorAll('.hint');

window.document.addEventListener('keydown' , (e) => {
    let key = document.querySelector(`.key[data-key="${e.code}"]`);
    let sound = document.querySelector(`audio[data-key="${e.code}"]`);

    if(! key) return;

    sound.currentTime = 0;
    sound.play();

    key.classList.add('playing');

    let keynote = key.getAttribute('data-note');
    nowPlaying.innerHTML = keynote;
})


AllKeys.forEach((element , value) => {
    element.addEventListener('click' , () => {
        element.classList.add('playing');
        let sound = document.querySelector(`audio[data-key="${element.getAttribute('data-key')}"]`);
        sound.currentTime = 0
        sound.play();
        let keynote = element.getAttribute('data-note');
        nowPlaying.innerHTML = keynote;
    });
})


AllKeys.forEach((elm , value) => {
    elm.addEventListener('transitionend' , function() {
        this.classList.remove('playing');
    } );
})

hints.forEach((element , value) => {
    element.style = `transition-delay : ${value * 30}ms`;
})



