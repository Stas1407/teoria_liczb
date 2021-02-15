$(document).ready(() => {
    var music = new Audio("/static/assets/music.mp3");
    music.volume = 0.4
    music.play()
    setTimeout(() => {
        $('#transition_left').animate({left: '-50%'}, 1000)
        $('#transition_right').animate({left: '100%'}, 1000)
    }, 600);
    setTimeout(() => {
        $('body').animate({opacity: '0'}, 1000)
        setTimeout(() => {
            window.location.href = "/square2"
        }, 1000)
    }, 13000)
})