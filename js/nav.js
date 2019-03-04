$(document).ready(function(){

    $('.navbar-toggler').on('click', function(){
        $(this).children('span').toggleClass('open');
    });

    //Menu Link Events
    $('#linkHome').click(function(){
        // scrollDown();
        $("html, body").animate({ scrollTop: $('.countdownv2').offset().top }, 1000);
        $('.nav-item').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('#linkQuiz').click(function(){
        // scrollDown();
        $("html, body").animate({ scrollTop: $('.questionsv2').offset().top }, 1000);
        $('.nav-item').removeClass('active');
        $(this).parent().addClass('active');
    });

});