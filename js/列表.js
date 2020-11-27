var a = $('.title li a');
$('.hide').children('div').hide();

a.each(function (index, item) {
    auto(index, $(item));
});
function auto(index,item) {
    touch.on(item, 'touchstart', function () {
        $('.hide').children('div').hide();
        $('.hide').children('div').eq(index).toggle();  
        a.eq(index).toggleClass('one');
        
        a.css('color', 'black');
        $(this).css('color', '#ff8a00');
        $('.title').css('border-bottom', 'none');
        $('.title li').children('i').css('borderColor', ' #cccccc transparent transparent transparent');
        $('.title li').children('i').css('top', '1.6rem');
            $('.title li').eq(index).children('i').css('borderColor', '  transparent transparent #ff8a00 transparent');
        $('.title li').eq(index).children('i').css('top', '1.2rem');
        if (a.eq(index).hasClass('one') == false) {
            $('.hide').children('div').eq(index).hide();
            $('.title li').children('i').css('borderColor', ' #cccccc transparent transparent transparent');
            $('.title li').children('i').css('top', '1.6rem');
            a.css('color', 'black');
        };
    });
}

    