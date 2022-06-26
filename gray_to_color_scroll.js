var offset = 100;

$(window).scroll(function(){

    var $elem = $(".magic"),
        topDist = $elem.offset().top - $(this).scrollTop(),
        bottomDist = $elem.offset().top + $elem.height() - $(this).scrollTop();

    if (topDist < offset && bottomDist > offset) {
        // (turn on colors)
        $elem.css("background-color","red");
    } else {
        // (turn off colors)
        $elem.css("background-color","gray");
    }
});
