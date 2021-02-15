$('html').hide()
$('#grid').hide()

$(document).ready(() => {
    var music = new Audio("/static/assets/music.mp3");
    music.volume = 0.4
    music.play()
    $('html').fadeIn(2000)
    setTimeout(() => {
        $('#grid').slideDown(2000)
        setTimeout(() => {
            $('.transition-top').addClass('top-active')
            $('.transition-bottom').addClass('bottom-active')
            setTimeout(() => {
                window.location.href = "/palindromic"
            }, 1000)
        }, 10000)
    }, 6000)
})