$("#Abouts").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#about").offset().top)
    }, 2000);
});

$("#Contacts").click(function() {
    $('html, body').animate({
        scrollTop: parseInt($("#contacttwo").offset().top)
    }, 2000);
});
