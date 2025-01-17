'use strict';
! function ($) {
    $.Page = {
        wrapper: $('.index')
    };

    $.Module = {};
}(window.jQuery),
function ($) {
    const Index = function () {
        this.init = function () {
            $.Module.initOwlCarousel(),
            $.Module.initFancybox();
        };

        $.Module.initOwlCarousel = function () {
            $('.owl-carousel').owlCarousel({
                items: 1,
                lazyLoad: true,
                loop: true,
                margin: 0,
                nav: false,
                dots: true,
                autoplay: true,
                autoHeight: true,
                autoplayTimeout: 4000,
                autoplaySpeed: 800
            })

            $('.course-carousel').owlCarousel({
                loop: true,
                items: 3,
                nav: true,
                dots: true,
                smartSpeed: 500,
                autoplay: false,
                autoHeight: true,
                margin: 30,
                navText: ["<i class='la la-angle-left'></i>", "<i class='la la-angle-right'></i>"],
                responsive: {
                    0: {
                        items: 1,
                    },
                    480: {
                        items: 1,
                    },
                    768: {
                        items: 2,
                    },
                    992: {
                        items: 3,
                    }
                }
            });
        };

        $.Module.initFancybox = function () {
            // $.ajax({
            //     type: 'GET',
            //     url: jsonURL,
            //     dataType: 'json',
            //     success: function (res) {
            //         data = res;
            //     }
            // });
            $.fancybox.open({
                src: '#index-modal',
                modal: 'true'
            });
        };
    };

    $.Module.Index = new Index;
}(window.jQuery),
function ($) {
    $.Module.Index.init();
}(window.jQuery);
