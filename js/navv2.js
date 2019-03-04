$(document).ready(function(){

    $('.navbar-toggler').on('click', function(){
        $(this).children('span').toggleClass('open');
    });

    //Menu Link Events
    $('#linkHome').click(function(){
        // scrollDown();
        $("html, body").animate({ scrollTop: $('.countdownv3').offset().top }, 1000);
        $('.nav-item').removeClass('active');
        $(this).parent().addClass('active');
    });

    $('#linkQuiz').click(function(){
        // scrollDown();
        $("html, body").animate({ scrollTop: $('.questionsv3').offset().top }, 1000);
        $('.nav-item').removeClass('active');
        $(this).parent().addClass('active');
    });

});