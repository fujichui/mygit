// 服务项目轮播
function lunbobo(imglist,cprev,cnext){
    var cloneimg = imglist.children('li').first().clone();
    imglist.append(cloneimg);
    var i = 0;
    var imgLength = imglist.children('li').length;
    var timerss = setInterval(playe,5000);
    var imgWidth = parseInt(imglist.children('li').css('width'));
    // 点击向左轮播
    cprev.click(function(){
        i--;
        console.log(i);
        if(i == -1){
            imglist.css({left:-(imgLength-1)*imgWidth});
            i = imgLength -2;
        }
        imglist.stop().animate({left: -i*imgWidth},5000);
    });


    // 点击向右轮播
    cnext.click(function(){
       playe();
    });

    // 自动播放
    function playe(){
        i++;
        if(i == imgLength){
            imglist.css({left:0});
            i=1;
        }
        imglist.stop().animate({left: -i*imgWidth},5000);
    }

    // 鼠标滑上停止自动轮播
    imglist.parent().mouseenter(function(){
        clearInterval(timerss);
    }).mouseleave(function(){
        timerss = setInterval(playe,5000);
    })
}
// 首页的nav轮播
var img_one = $('.carousel .carouselImg');
var cprev_one = $('#carouselPrev');
var cnext_one = $('#carouselNext');
lunbobo(img_one,cprev_one,cnext_one);

// 首页 news部分 选项卡
$('.news #tabul .tabli').mouseenter(function(){
    $('.news #tabul .tabli').removeClass('active');
    $(this).addClass('active');
    $('#tabdiv .tabcontent').eq($(this).index()).addClass('active').siblings().removeClass('active');
});




// 预选阿姨
$("#useryxay").click(function(){
    $("#ayiselect").show();
})

$("#yxaysub").click(function(){
    $("#ayiselect").hide();
    return false;
})
$("input[type=checkbox]").click(function () {
    if($(this).attr("checked")){
        $("#useryxaysel").val($("#useryxaysel").val() + $(this).next("strong").text() + ";");
        console.log($(this).next("strong").text());
        console.log($("#useryxaysel").val());
    } else {
        $("#useryxaysel").val($("#useryxaysel").val().replace($(this).next("strong").text() + ';', ""));
    }
})

// 首页 注册验证

// 姓名验证
$(function(){

var ureg = /^[\u4e00-\u9fa5]{2,4}$/;
$('input[name="username"]').focus(function(){
    $(this).text('');
}).blur(function(){
    if($(this).val().match(ureg)){
        $(this).next("span").css("display","block");
        $(this).next("span").next("i").css("display","none");
    }else{
        $(this).next("span").css("display","none");
        $(this).next("span").next("i").css("display","block");
    }
});

// 密码认证
var preg = /^\w{6,12}$/;
var fuji = "";
$('input[name="password"]').focus(function(){
    $(this).text('');
}).blur(function(){
    if($(this).val().match(preg)){
        $(this).next("span").css("display","block");
        $(this).next("span").next("i").css("display","none");
    }else{
        $(this).next("span").css("display","none");
        $(this).next("span").next("i").css("display","block");
    }
    console.log($(this).val());
    fuji = $(this).val();
});

//重复密码认证
$('input[name="repwd"]').focus(function(){
    // $(this).text('');
}).blur(function(){
    if($(this).val() == fuji){
        $(this).next("span").css("display","block");
        $(this).next("span").next("i").css("display","none");
    }else{
        $(this).next("span").css("display","none");
        $(this).next("span").next("i").css("display","block");
    }
    console.log($(this).val());
    console.log(fuji);
    console.log($('input[name="password"]').val());
    // console.log($(this).prev("li").children("input").val());
});



// 年龄验证
var areg = /^(?:[1-9][0-9]?|1[01][0-9]|120)$/;
$('input[name="age"]').focus(function(){
    $(this).text('');
}).blur(function(){
    if($(this).val().match(areg)){
        $(this).next("span").css("display","block");
        $(this).next("span").next("i").css("display","none");
    }else{
        $(this).next("span").css("display","none");
        $(this).next("span").next("i").css("display","block");
    }
});

// 验证手机号
var treg = /^1([358]\d|4[57]|7[0135678])\d{8}$/;
$('input[name="telephone"]').focus(function(){
    $(this).text('');
}).blur(function(){
    if($(this).val().match(treg)){
        $(this).next("span").css("display","block");
        $(this).next("span").next("i").css("display","none");
    }else{
        $(this).next("span").css("display","none");
        $(this).next("span").next("i").css("display","block");
    }

});

// 验证e-mail
var ereg = /^[\w][\w-]+@[0-9a-zA-Z]+(\.\w+){1,3}$/;
$('input[name="email"]').focus(function(){
    $(this).text('');
}).blur(function(){
    if($(this).val().match(ereg)){
        $(this).next("span").css("display","block");
        $(this).next("span").next("i").css("display","none");
    }else{
        $(this).next("span").css("display","none");
        $(this).next("span").next("i").css("display","block");
    }
});

// 验证身份证号
var creg =  /^[1-9]\d{5}[1-9]\d{3}((0\d)|(1[0-2]))(([0|1|2]\d)|3[0-1])\d{3}([0-9]|X)$/;
$('input[name="cardid"]').focus(function(){
    $(this).text('');
}).blur(function(){
    if($(this).val().match(creg)){
        $(this).next("span").css("display","block");
        $(this).next("span").next("i").css("display","none");
    }else{
        $(this).next("span").css("display","none");
        $(this).next("span").next("i").css("display","block");
    }
});
})