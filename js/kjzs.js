$(function () {
    $(".li_").mouseenter(function () {
        $(this).stop().animate({
            width: 400
        }).siblings().stop().animate({
            width: 100
        })
    })
    $(".li_").mouseleave(function () {
        $(this).stop().animate({
            width: 200
        }).siblings().stop().animate({
            width: 200
        })
    })
})