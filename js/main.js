// Sets the Active Nav menu element
$(function() {
    var u = window.location.href.substr(window.location.href
        .lastIndexOf("/") + 1);
    $(".navbar li a").each(function() {
        $h = $(this).attr("href");
        if ($h == u || $h == '')
            $(this).addClass("active");
    })
});