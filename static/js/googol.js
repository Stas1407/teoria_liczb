$(document).ready(() => {
    var music = new Audio("/static/assets/music.mp3");
    music.volume = 0.4
    music.play()
    setTimeout(() => {
        $('.transition-top').removeClass('top-active')
        $('.transition-bottom').removeClass('bottom-active')
    }, 500)

    setTimeout(() => {
        $('body').fadeOut(1000)
        setTimeout(() =>{
            window.location.href = '/'
        }, 1000)
    }, 10000)
})