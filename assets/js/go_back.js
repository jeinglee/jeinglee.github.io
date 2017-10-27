$(function(){
    $("#gotop").click(function(){
        jQuery("html,body").animate({
            scrollTop:0
        },1000);
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gotop').fadeIn("fast");
        } else {
            $('#gotop').stop().fadeOut("fast");
        }
    });
});

$(function(){
    $("#gohome").click(function(){
        window.location.href = "index.html";
    });
    $(window).scroll(function() {
        if ( $(this).scrollTop() > 300){
            $('#gohome').fadeIn("fast");
        } else {
            $('#gohome').stop().fadeOut("fast");
        }
    });
});