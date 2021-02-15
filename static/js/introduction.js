$(document).ready(() => {
    var music = new Audio("/static/assets/music.mp3");
    music.volume = 0.4
    music.play()
    setTimeout(() => {
        $('.transition-top').removeClass('top-active')
        $('.transition-bottom').removeClass('bottom-active')
    }, 200)
    
    setTimeout(() => {
        $('.fullscreen-bg').animate({
            left: "-=100%",
            height: "-=20%",
            width: "-=20%",
            top: "-=100%"
          }, 2000);
          $('#main_text').animate({
            left: "-=100%",
            height: "-=20%",
            width: "-=20%",
            top: "-=100%"
          }, 2000);
          setTimeout(() => {
            window.location.href = "/perfect"
          }, 2000)
    }, 9000)
}) 