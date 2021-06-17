import $ from "jquery"
$(function() {
    $(".mask").css("display", "none")
    $(".copyright button").click(
        function() {
            $("body").css("overflow", "hidden")
            $(".mask").fadeIn(500)
        }
    )
    $(".img").click(function() {
        $("body").css("overflow", "auto")
        $(".mask").fadeOut(500)
    })
})