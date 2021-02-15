$('body').hide()
$('#triangle').hide()
$(document).ready(() => {
    var music = new Audio("/static/assets/music.mp3");
    music.volume = 0.4
    music.play()
    $('body').fadeIn(2000)
    setTimeout(() => {
        $('.fullscreen-bg__video').get(0).play()
        setTimeout(() => {
            $('#triangle').show()
            $('body').css('background-image', "url('/static/assets/triangle_bg.png')")
            $('.fullscreen-bg').hide()
            setTimeout(() => {
                $('#triangle').animate({
                    left: '100%',
                    top: '-80%'
                }, 1000, () => {
                    $('body').animate({opacity: 0}, 1000)
                    $('html').animate({opacity: 0}, 1000, () => {
                        window.location.href = "/triangle2"
                    })
                })
            }, 1000)
        }, 18000)
    }, 5000)
})