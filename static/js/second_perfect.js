$('#second_perfect').hide()
$('#main_text').hide()

$(document).ready(() => {
    $('#second_perfect').show(1000)
    $('#main_text').show(1000)
})

$('#second_perfect').click(() => {
    $('#second_perfect').css('animation', 'none')
    $('#second_perfect').animate({
        right: '50%',
        fontSize: '8vw'
    }, 1000, () => {
        $('.equation h1:nth-child(odd)').animate({opacity: '1'}, 2000, () => {
            $('.equation h1:nth-child(even)').animate({opacity: '1'}, 1000)
        })
        setTimeout(() => {
            $('#second_perfect').hide(1000)
            $('.equation').hide(1000)
            $('#main_text').slideUp(1000)
            setTimeout(() => {
                window.location.href = "/square"
            }, 1000)
            
        }, 9000)
    })
})