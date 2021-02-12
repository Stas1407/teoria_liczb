$('html').hide()
$('#grid').hide()

$(document).ready(() => {
    $('html').fadeIn(2000)
    setTimeout(() => {
        $('#grid').slideDown(2000)
    }, 6000)
})