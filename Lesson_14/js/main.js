$(document).ready(function() {
    $('.main_nav li:eq(1), .main_btn, .main_btna').click(function() {
        $('.overlay').animate({opacity: 'toggle'}, 'slow');
        $('.modal').animate({
            opacity: 'toggle',
            height: 'toggle',
            marginTop: 'toggle'
        });
    });
    $('.close').click(function() {
        $('.overlay').animate({opacity: 'toggle'}, 'slow');
        $('.modal').animate({
            opacity: 'toggle',
            height: 'toggle',
            marginTop: 'toggle'
        });
    });

    $('.contactform_select').submit(function(e) {
        e.preventDefault();
        let msg   = $(this).serialize();
        $.ajax({
            type: 'POST',
            url: 'server.php',
            data: msg,
            success: function() {
                $('.thanks').animate({opacity: 'toggle'}, 'slow');
                $('.modal').hide();
            },
            error:  function(){
                alert('Произошла ошибка! Попробуйте ещё раз!');
            }
        });
    });

    $('.back').click(function() {
        $('.thanks').animate({opacity: 'toggle'}, 'slow');
        $('.overlay').animate({opacity: 'toggle'}, 'slow');
    })

});