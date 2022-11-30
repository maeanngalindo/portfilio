$(document).ready(funcion)({

    $('#menu').click(function(){
        $(this).toggleClass('fa-times');
        $('header').toggleClass('toggle');
    });

    $(window).on('scroll load',fuction(){

        $('#menu').removeClass('fa-times');
        $('header').removeClass('toggle');
    });

});