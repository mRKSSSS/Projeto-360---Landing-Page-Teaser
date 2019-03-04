// $(window).on('load', function(){
//     $('#preloader').fadeOut('slow',function(){
//         $(this).remove();   
//     });
// });

// Uncomment below to test preloader with more time
$(document).ready(function(){
    setInterval(preLoader, 2000);
    function preLoader(){
        $('#preloader').fadeOut('slow',function(){
            $(this).remove();   
        });
    }
});