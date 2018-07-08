
$(document).ready(function(){
    $(".p1").hide();
$(".p2").hide();
$(".p3").hide();
$(".p4").hide();
})


$(".s1").click(function () {
    $(".p1").toggle(200);
    $(".p2").hide(200);
    $(".p3").hide(200);
    $(".p4").hide(200);
})
$(".s2").click(function () {
    $(".p1").hide(200);
    $(".p2").toggle(200);
    $(".p3").hide(200);
    $(".p4").hide(200);
})
$(".s3").click(function () {
    $(".p1").hide(200);
    $(".p2").hide(200);
    $(".p3").toggle(200);
    $(".p4").hide(200);
})
$(".s4").click(function () {
    $(".p1").hide(200);
    $(".p2").hide(200);
    $(".p3").hide(200);
    $(".p4").toggle(200);
})