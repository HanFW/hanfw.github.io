"use strict";

$(document).ready(function () {
    $(this).scrollTop(0);
    $('#contact-form').validate({ // initialize the plugin
        rules: {
            inputSubject: {
                required: true                        
            },
            inputMessage: {
                required: true
            },
            inputName: {
                required: true
            },
            inputEmail: {
                required: true,
                email: true
            }
        },
        highlight: function (element, errorClass) {
            $(element).closest('.form-group').addClass('has-error');
        },
        unhighlight: function (element, errorClass) {
            $(element).closest('.form-group').removeClass('has-error');
        },
        messages: {
            inputSubject: "What is the subject? ",
            inputMessage: "Any message for me? ",
            inputName: "May I know your name? ",
            inputEmail: {
                required: "Please enter your email. ",
                email: "Please enter a valid email."
            }
        },
        submitHandler: function(){
            $('.form-control').empty();
            $('#contact-button').attr({
                "value": "Message Sent!"
            }).removeClass("contact-button").addClass("disabled contact-button-disabled");
            $('#contact-form .form-control').prop("disabled", true);
        }        
    });
});

jQuery(document).ready(function ($) {
    var windowWidth = $(window).width();
    if (windowWidth > 757) {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('.navbar').fadeIn(500);
                $('.navbar').addClass('menu-bg');
            } else {
                $('.navbar').removeClass('menu-bg');
            }
        });
        
    }
    $('#bs-example-navbar-collapse-1').localScroll();
    $.localScroll();
});