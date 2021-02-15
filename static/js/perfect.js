$('body').hide()
$('#six').hide()
$('#second_text').hide()
$('#third_text').hide()


let timeout = ''
let stage = 0
$(document).ready(() => {
    var music = new Audio("/static/assets/music.mp3");
    music.volume = 0.4
    music.play()
    $('body').fadeIn(5000)
    timeout = setTimeout(() => {
        stage = 1
        // Show second scene
        $('#main_text').animate({'top':'-30%'})
        setTimeout(() => {
            $('#main_text').hide()
            $('html').fadeOut(1000)
            $('body').fadeOut(1000)
            setTimeout(() =>{
                $('html').css({'background-image': "url('/static/assets/perfect2_bg.png')"})
                $('body').css({'background-image': "url('/static/assets/perfect2_bg.png')"})
                $('.fullscreen-bg').hide()
                setTimeout(() => {
                    $('html').fadeIn(900)
                    $('body').fadeIn(900)
                    $('#six').show(1000)
                    $('#second_text').show(1000)
                    setTimeout(() => {
                        $('#six').slideUp(1000)
                        $('#second_text').slideUp(1000)
                        setTimeout(() => {
                            window.location.href = 'second_perfect'
                        }, 1000)
                    }, 10000)
                }, 100)
            }, 1000)
        }, 300)
    }, 7000)

    $(document).keypress((e) => {
        if(e.which == '13' && stage == 0){
            clearTimeout(timeout)
            stage = 1
            $('#main_text').animate({'top':'-30%'})
            setTimeout(() => {
                $('#main_text').hide()
                $('html').fadeOut(1000)
                $('body').fadeOut(1000)
                setTimeout(() =>{
                    $('html').css({'background-image': "url('/static/assets/perfect2_bg.png')"})
                    $('body').css({'background-image': "url('/static/assets/perfect2_bg.png')"})
                    $('.fullscreen-bg').hide()
                    setTimeout(() => {
                        $('html').fadeIn(900)
                        $('body').fadeIn(900)
                        $('#six').show(1000)
                        $('#second_text').show(1000)
                    }, 100)
                }, 1000)
            }, 300)
        }
    })
})