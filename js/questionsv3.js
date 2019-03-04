// Scroll-down function
// function scrollDown() {
//     var vheight = $(window).height();
//     $('html, body').animate({
//         scrollTop: (Math.floor($(window).scrollTop() / vheight)+1) * vheight
//     }, 500);  
// };

$(document).ready(function(){

    // Counter Variable
    let count = 0;

    //Hover Effects on the Steering Wheel
    $('.but-no, .steering-wheel-left').mouseenter(function(){  
        $(this).siblings('.steering-wheel').addClass('turn-left');
        $(this).siblings('.but-no').addClass('hover-click-no');
    });
    $('.but-no, .steering-wheel-left').mouseleave(function(){
        $(this).siblings('.steering-wheel').removeClass('turn-left');
        $(this).siblings('.but-no').removeClass('hover-click-no');
    });
    $('.but-yes, .steering-wheel-right').mouseenter(function(){
        $(this).siblings('.steering-wheel').addClass('turn-right');
        $(this).siblings('.but-yes').addClass('hover-click-yes');
    });
    $('.but-yes, .steering-wheel-right').mouseleave(function(){
        $(this).siblings('.steering-wheel').removeClass('turn-right');
        $(this).siblings('.but-yes').removeClass('hover-click-yes');
    });


    //Scroll Down Click Events
    $('.scroll-down').click(function(){
        // scrollDown();
        $("html, body").animate({ scrollTop: $('.wot').offset().top }, 1000);
    });

    // YES / NO Buttons Click Events
    $('.button').click(function(){
        $(this).prop('disabled', true);
        $(this).siblings('.steering-wheel-left, .steering-wheel-right').unbind('click mouseenter mouseleave');
        $(this).addClass('clicked');
        if($(this).next().hasClass('button')){
            $(this).next().prop('disabled', true);
            $(this).next().addClass('not-clicked');
        }else if($(this).prev().hasClass('button')){
            $(this).prev().prop('disabled', true);
            $(this).prev().addClass('not-clicked');
        };
        // $(this).parent().parent().children('.not-got-it-button').hide();
        // $(this).parent().parent().children('.scroll-down').show();
        // $(this).parent().parent().next().addClass('show');
        // if(!$(this).hasClass('finish')){
        //     scrollDown();
        // }
        if(!$(this).parent().parent().hasClass('helper')){
            $(this).parent().parent().fadeOut(500);
            $(this).parent().parent().next('.question').fadeIn(1400);
        }
        $("html, body").animate({ scrollTop: $('.questionsv3').offset().top }, 1000);
    });

    // Left / Right Steering Wheel Click Events
    $('.steering-wheel-left, .steering-wheel-right').click(function(){
        $(this).unbind('click mouseenter mouseleave');
        $(this).siblings('.button').prop('disabled', true);
        if($(this).hasClass('steering-wheel-left')){
            $(this).next().unbind('click mouseenter mouseleave');
            $(this).siblings('.but-no').addClass('clicked');
            $(this).siblings('.but-yes').addClass('not-clicked');
        }else if($(this).hasClass('steering-wheel-right')){
            $(this).prev().unbind('click mouseenter mouseleave');
            $(this).siblings('.but-no').addClass('not-clicked');
            $(this).siblings('.but-yes').addClass('clicked');
        };
        // $(this).parent().parent().children('.not-got-it-button').hide();
        // $(this).parent().parent().children('.scroll-down').show();
        // $(this).parent().parent().next().addClass('show');
        // if(!$(this).hasClass('finish')){
        //     scrollDown();
        // }
        if(!$(this).parent().parent().hasClass('helper')){
            $(this).parent().parent().fadeOut(500);
            $(this).parent().parent().next('.question').fadeIn(1400);           
        }
        $("html, body").animate({ scrollTop: $('.questionsv3').offset().top }, 1000);
    });

    //Clone steering-wheel-left and steering-wheel-right clickable divs
    var steeringWheelLeft = $('.helper').find('.steering-wheel-left').clone(true, true);
    var steeringWheelRight = $('.helper').find('.steering-wheel-right').clone(true, true);

    //Helper Click event to Hide
    $('.got-it-button').click(function(){
        $('.helper').fadeOut();
        $("html, body").animate({ scrollTop: $('.questionsv3').offset().top }, 1000);
    });

    //Helper Click Event to Show
    $('.not-got-it-button').click(function(e){
        e.preventDefault();
        $("html, body").animate({ scrollTop: $('.questionsv3').offset().top }, 1000);
        $('.helper').fadeIn();
        $('.helper').find('.button').removeClass('clicked hover-click not-clicked');
        $('.helper').find('.button').prop('disabled', false);
        $('.helper').find('.steering-wheel').removeClass('turn-left turn-right');
        $('.helper').find('.steering-wheel-left').remove();
        $('.helper').find('.steering-wheel-right').remove();        
        $('.helper').find('.question-holder').append(steeringWheelLeft);
        $('.helper').find('.question-holder').append(steeringWheelRight);
        //Replace steering-wheel-left and steering-wheel-right clickable divs
        steeringWheelLeft = $('.helper').find('.steering-wheel-left').clone(true, true);
        steeringWheelRight = $('.helper').find('.steering-wheel-right').clone(true, true);
    });

    // Counter to calculate the final classification of the "unknown"
    $('#yes-button, #yes-wheel').click(function(){
        count+= 2;
    });

    // Finish Questions Button Click Event
    $('.finish').click(function(){
        // $('.finish').hide();
        // $("html, body").animate({ scrollTop: $(document).height() }, 1000);
        const answerHeader = '<h1>O seu desconhecido é...</h1>';
        if(count <= 4){
            $('.answer').html(
                answerHeader +
                '<p>Ouvir e calar – You have things to say!</p>'
            );
            $('.answer').css('background-image','url("img/microphone.jpg")');                
        }else if(count >= 5 && count <= 8){
            $('.answer').html(
                answerHeader +
                '<p>Viver sem as redes sociais – Olá cyborg.</p>'
            );
            $('.answer').css('background-image','url("img/cyborg.jpg")');
        }else if(count >= 9 && count <= 12){
            $('.answer').html(
                answerHeader +
                '<p>O silêncio - Gotta love music!</p>'
            );
            $('.answer').css('background-image','url("img/music.jpg")');
        }else if(count >= 13 && count <= 16){
            $('.answer').html(
                answerHeader +
                '<p>O amor da tua vida - Ele anda por aí!</p>'
            );
            $('.answer').css('background-image','url("img/love.jpg")');
        }else{
            $('.answer').html(
                answerHeader +
                '<p>Ser a alma da festa – Solta o dançarino dentro de ti.</p>'
            );
            $('.answer').css('background-image','url("img/dance.jpg")');
        }
        $('.answer').show("slow");
    });

});