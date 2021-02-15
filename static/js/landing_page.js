setInterval(() =>{
    $( ".arrow_icon" ).animate({
        fontSize: "+=10%"
      }, 200, function() {
        $( ".arrow_icon" ).animate({
            fontSize: "-=10%"
          }, 200);
      });
}, 2000)


$('.col-lg-3').hover((e) => {
    $('#'+e.target.id).css('background-color', '#3C3F46')
}, (e) => {
    $('#'+e.target.id).css('background-color', '#242629')
})

$('.exit_icon').click(() => {
    $('.menu').fadeOut(700)
})

$('.menu_icon').click(() => {
    $('.menu').fadeIn(700)
})

$('.arrow_icon').click(() => {
    $('.transition-top').addClass('top-active')
    $('.transition-bottom').addClass('bottom-active')
    setTimeout(() => {
        window.location.href = "/introduction"
    }, 1000)
})

$(document).keypress((event) => {
    if(event.which == 13){
        $('.transition-top').addClass('top-active')
        $('.transition-bottom').addClass('bottom-active') 
        setTimeout(() => {
            window.location.href = "/introduction"
        }, 1000)
    }
})
var music = new Audio("/static/assets/music.mp3");
music.volume = 0.4
$(document).ready(() => {
    $('.menu').hide()
    music.play();
    $('.col-lg-3').click((e) => {
        if($('#'+e.target.id).hasClass('perfect')) window.location.href = '/perfect';
        if($('#'+e.target.id).hasClass('square')) window.location.href = '/square';
        if($('#'+e.target.id).hasClass('triangle')) window.location.href = '/triangle';
        if($('#'+e.target.id).hasClass('palindromiczne')) window.location.href = '/palindromic';
    })
})
let is_playing = false;
$(document).click(() => {
    if(!is_playing)
    {
        music.play();
    }
    
})