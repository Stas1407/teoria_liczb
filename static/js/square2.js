$('#second_number').hide()
$('#second_wrapper').hide()
$('#grid').hide()

setTimeout(() => {
    $('body').animate({opacity: '1'}, 1000)
}, 100)

$('#number').click(() => {
    $('#number').css('animation', 'none')
    $('#number').animate({
        right: '60%',
        bottom: '15%',
        fontSize: '12vw'
    }, 1000, () => {
        $('#second_wrapper').show(1000)
        setTimeout(() => {
            $('#second_number').show(1000)
            setTimeout(() => {
                $('#grid').slideDown(1000)
            }, 2000)
        }, 1000)
    })
})