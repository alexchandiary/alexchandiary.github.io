'use strict';
! function ($) {
    $.Module = {};
}(window.jQuery),
function ($) {
    const Main = function () {
        let body = $('body');
        let menuWrapper = body.find('.menu-wrapper');

        this.init = function () {
            $.Module.Main.Menu(),
            $.Module.Main.setCookie();
        };

        this.Menu = function () {
            menuWrapper.find('.side-menu-ul .sidenav-item .menu-plus-icon').click(function () {
                $(this).closest('.sidenav-item').siblings().removeClass('active').find('.side-sub-menu').slideUp(200);
                $(this).closest('.sidenav-item').toggleClass('active').find('.side-sub-menu').slideToggle(200);
            });

            menuWrapper.find('.header-category ul li .dropdown-menu-item > li').click(function () {
                $(this).closest('li').siblings().removeClass('active').find('.sub-menu').slideUp(200);
                $(this).closest('li').toggleClass('active').find('.sub-menu').slideToggle(200);
            });

            menuWrapper.find('.logo-right-button .side-menu-open').click(function () {
                menuWrapper.find('.side-nav-container').addClass('active');
            });

            menuWrapper.find('.humburger-menu .side-menu-close').click(function () {
                menuWrapper.find(".side-nav-container").removeClass('active');
            });

            let scrollButton = $('#scroll-top');
            let nav = document.querySelector('.header-menu-content');
            let topOfNav = nav.offsetTop;

            $(window).on('scroll', function () {
                if ($(window).scrollTop() >= topOfNav) {
                    document.body.style.paddingTop = nav.offsetHeight + 'px';
                    document.body.classList.add('fixed-nav');
                } else {
                    document.body.style.paddingTop = 0;
                    document.body.classList.remove('fixed-nav');
                }

                if ($(this).scrollTop() >= 300) {
                    scrollButton.show();
                } else {
                    scrollButton.hide();
                }
            });

            scrollButton.click(function () {
                $('html, body').animate({
                    scrollTop: 0
                }, 1000);
            });
        }

        if (!localStorage.hasOwnProperty('cookie')) {
            $(".alert-cookie").css('display' ,'block');
            $(".alert-cookie .agree").click(function () {
                localStorage.setItem("cookie", true);
            });
        }

        this.setCookie = function () {
            if (!localStorage.hasOwnProperty('cookie')) {
                $(".alert-cookie").css('display' ,'block');
                $(".alert-cookie .agree").click(function () {
                    localStorage.setItem("cookie", true);
                });
            }
        }
    };

    $.Module.Main = new Main;
}(window.jQuery),
function ($) {
    $.Module.Main.init();
}(window.jQuery);
