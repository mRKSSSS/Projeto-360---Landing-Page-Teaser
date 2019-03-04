// Scroll-down function
function scrollDown() {
    var vheight = $(window).height();
    $('html, body').animate({
        scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
    }, 500);  
};

$(document).ready(function(){

    // Variables
    let count = 0;

    //Scroll Down Click Events
    $('.scroll-down').click(function(){
        scrollDown();
    });

    // YES / NO Buttons Click Events
    $('.button').click(function(){
        $(this).prop('disabled', true);
        $(this).addClass('clicked');
        if($(this).next().hasClass('button')){
            $(this).next().prop('disabled', true);
            $(this).next().addClass('not-clicked');
        }else if($(this).prev().hasClass('button')){
            $(this).prev().prop('disabled', true);
            $(this).prev().addClass('not-clicked');
        };
        $(this).nextAll('.scroll-down').show();
        if(!$(this).hasClass('finish')){
            scrollDown();
        }
    });

    $('#yes-button, #yes-wheel').click(function(){
        count+= 2;
    });

    // Finish Questions Button Click Event
    $('.finish').click(function(){
        $('.finish').hide();
        $("html, body").animate({ scrollTop: $(document).height() }, 1000);
        if(count <= 4){
            $('.answer').html(
                '<h1>O teu desconhecido é...</h1>' +
                '<p>Ouvir e calar – You have things to say!</p>');
            $('.final').css('background-image','url("img/microphone.jpg")');                
        }else if(count >= 5 && count <= 8){
            $('.answer').html(
                '<h1>O teu desconhecido é...</h1>' +
                '<p>Viver sem as redes sociais – Olá cyborg.</p>');
                $('.final').css('background-image','url("img/cyborg.jpg")');
        }else if(count >= 9 && count <= 12){
            $('.answer').html(
                '<h1>O teu desconhecido é...</h1>' +
                '<p>O silêncio - Gotta love music!</p>');
                $('.final').css('background-image','url("img/music.jpg")');
        }else if(count >= 13 && count <= 16){
            $('.answer').html(
                '<h1>O teu desconhecido é...</h1>' +
                '<p>O amor da tua vida - Ele anda por aí!</p>');
                $('.final').css('background-image','url("img/love.jpg")');
        }else{
            $('.answer').html(
                '<h1>O teu desconhecido é...</h1>' +
                '<p>Ser a alma da festa – Solta o dançarino dentro de ti.</p>');
                $('.final').css('background-image','url("img/dance.jpg")');
        }
        $('.answer').show("slow");
        $('.form').show("slow");
        // scrollDown();
    });


});