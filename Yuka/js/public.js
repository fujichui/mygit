$("#login").click(function(){
    $(".loginModule").show();
    $(".loginBg").show();
})
$(".loginModule .close").click(function(){
    $(".loginModule").hide();
    $(".loginBg").hide();
})
$(".logForm .immeregister").click(function(){
    $(".registerModule").show();
    $(".loginBg").show();
    $(".loginModule").hide();
})

$("#register").click(function(){
    $(".registerModule").show();
    $(".loginBg").show();
})
$(".registerModule .close").click(function(){
    $(".registerModule").hide();
    $(".loginBg").hide();
})
$(".regForm #immelogin").click(function(){
    $(".loginModule").show();
    $(".loginBg").show();
    $(".registerModule").hide();
})

$("#rep").click(function(){
    $(".reportModule").show();
    $(".loginBg").show();
})
$(".reportModule .close").click(function(){
    $(".reportModule").hide();
    $(".loginBg").hide();
})