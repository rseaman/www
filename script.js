$(document).ready(function() {
    $('#titlebar').mouseenter(function() {
        $('#titlebar').fadeTo('slow', 1);
    });
    $('#titlebar').mouseleave(function() {
        $('#titlebar').fadeTo('slow', 0.5);
    });
});