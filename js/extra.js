$(document).ready(function(argument) {

    $('#menu #menu-toggle').click(function(argument) {
        $('#menu #menu-buttons').toggle();
        $('#menu #menu-toggle').toggleClass('change');
    });


    $('#charges .empty').click(function(argument) {
        $(this).parent().find('input[type="checkbox"]').each(function(argument) {
            $(this).prop("checked", false);
        });
    });

    $('#charges .fill').click(function(argument) {
        $(this).parent().find('input[type="checkbox"]').each(function(argument) {
            $(this).prop("checked", true);
        });
    });
});