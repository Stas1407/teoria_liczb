$('.numbers').hide()
$('.dependence').hide()

$(document).ready(() => {
    var music = new Audio("/static/assets/music.mp3");
    music.volume = 0.4
    music.play()
    setTimeout(() =>{
        $('.transition-top').removeClass('top-active')
        $('.transition-bottom').removeClass('bottom-active')
    }, 500)  
    setTimeout(() => {
        $('#main_text').fadeOut(1000)
        $('.numbers').fadeIn(1000)
        setTimeout(() => {
            $('#picture').fadeOut(1000)
            $('.numbers').hide(1000)
            setTimeout(() => {
                $('.dependence').fadeIn(1000)
                setTimeout(() => {
                    $('.transition-top').addClass('top-active')
                    $('.transition-bottom').addClass('bottom-active')
                    setTimeout(() => {
                        window.location.href = "/googol"
                    }, 1000)
                }, 10000)
            }, 1000)
        }, 9000)
    }, 10000)
})