(function($) {

    'use strict';

    $(function() {

        $('.opt').selecter();

        var orderPart = $('.orderPart');
        var orders = $('.orders');
        var cart = $('.cart');
        var opaque = $('.opaque');
        var header = $('.orderPart-header');

        $(cart).each(function(index) {
            $(this).on('click', function () {
                $(orderPart).animate({
                    width: 'toggle'
                }, 400);
                $(opaque).css({
                    transition: '1s',
                    opacity: .7,    
                    zIndex: 100
                });
            });
        });

        $(opaque).on('click', function () {
            $(orderPart).animate({
                width: 'toggle'
            }, 300);
            $(opaque).css({
                transition: '1s',
                opacity: 0,
                zIndex: -10
            });
        });

        $(header).on('click', function () {
            $(orderPart).animate({
                width: 'toggle'
            }, 200);
            $(opaque).animate({
                opacity: 0,
                zIndex: -10
            }, 300);
        });
    });
})(jQuery);