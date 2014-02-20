$(document).ready(function() {
    $('#titlebar').mouseenter(function() {
        $('#titlebar').fadeTo('slow', 1);
    });
    $('#titlebar').mouseleave(function() {
        $('#titlebar').fadeTo('slow', 0.5);
    });
    $(".toggleMenu").css("display", "none");
    $(".nav li").hover(function() {
        $(this).addClass('hover');
    }, function() {
        $(this).removeClass('hover');
    });
    var ww = document.body.clientWidth;
    if (ww < 800) {
        $(".toggleMenu").css("display", "inline-block");
        $(".nav li a").click(function() {
            $(this).parent("li").toggleClass('hover');
        });
    } else {
        $(".toggleMenu").css("display", "none");
        $(".nav li").hover(function() {
            $(this).addClass('hover');
        }, function() {
            $(this).removeClass('hover');
        });
    }
    $(".nav li a").each(function() {
        if ($(this).next().length > 0) {
            $(this).addClass("parent");
        };
    })
    if (ww < 800) {
        $(".toggleMenu").css("display", "inline-block");
        $(".nav li a.parent").click(function(e) {
            e.preventDefault();
            $(this).parent("li").toggleClass('hover');
        });
    } else {
        ...
    }
    $(".toggleMenu").click(function(e) {
        e.preventDefault();
        $(".nav").toggle();
    });
     
    if (ww < 800) {
        $(".toggleMenu").css("display", "inline-block");
        $(".nav").hide();
    } else {
        ...
    }
});