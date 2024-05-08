//원페이지 스크롤 이벤트
//js/side.js
$(function () {
    $('.wrap_af').hide();
    $(".fa-bars").click(function () {
        $("#side").animate({ left: '0' }, 500);
        $(this).fadeOut();
        $('.wrap_af').fadeIn();
    });
    $(".fa-chevron-left").click(function () {
        $("#side").animate({ left: '-310' }, 500);
        $(".fa-bars").fadeIn();
        $('.wrap_af').fadeOut();
    });

});
//js/mousewheel.js
$(function () {
    var win_h = $(window).height();
    $('.page').each(function (index) {
        $(this).attr("data-index", win_h * index);
    });

    $('.page').on("mousewheel", function (e) {
        var pagePos = parseInt($(this).attr("data-index"));
        if (e.originalEvent.wheelDelta >= 0) { //Delta = 가로성전호
            $("html,body").stop().animate({ scrollTop: pagePos - win_h });
            return false;
        } else if (e.originalEvent.wheelDelta < 0) {
            $("html,body").stop().animate({ scrollTop: pagePos + win_h });
            return false;
        }
    });
});