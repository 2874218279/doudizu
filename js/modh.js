$(function(){ 

    //手机导航
    $(".header2 .nav-btn").on('click', function() {
        var _this = $(this);
        if (!$(this).hasClass('hover')) {
            $(this).addClass('hover');
            $(this).children('.line1').stop(true,true).transition({rotate: 45}, 300);
            $(this).children('.line2').stop(true,true).fadeOut(300);
            $(this).children('.line3').stop(true,true).transition({rotate: -45}, 300,function(){
                _this.addClass('active');
            });
            $(this).parent(".main-wrap").siblings('.sub-menu').stop().fadeIn();
            $("header .list-cont").addClass('active');
            $("body,html").stop(true,true).addClass('ovh-f');
            $(".search-bg").stop(true,true).fadeIn();
            $(".header2").addClass('active');
            $(".sub-menu li").addClass("animate");
        }else{
            $(this).removeClass('hover');
            $(this).removeClass('active');
            $(this).children('.line1').stop(true,true).transition({rotate: 0}, 300);
            $(this).children('.line2').stop(true,true).fadeIn(300);
            $(this).children('.line3').stop(true,true).transition({rotate: 0}, 300);
            $(this).parent(".main-wrap").siblings('.sub-menu').stop().fadeOut();
            $("header .list-cont").removeClass('active');
            $("body,html").stop(true,true).removeClass('ovh-f');
            $(".search-bg").stop(true,true).fadeOut();
            $(".header2").removeClass('active');
            $(".sub-menu li").removeClass("animate");
        }
    });
    setTimeout(function(){
        $(".header1 nav li").eq(1).removeClass("delay1");
        $(".header1 nav li").eq(2).removeClass("delay2");
        $(".header1 nav li").eq(3).removeClass("delay3");
        $(".header1 nav li").eq(4).removeClass("delay4");
        $(".header1 nav li").eq(5).removeClass("delay5");
        $(".header1 nav li").eq(6).removeClass("delay6");
    },1500)

    scrollAni();
    visual_button_scroll_down();
    visual_button_scroll_down2()
    $('.back-top').on('click',function(){
        $('html,body').animate({
            scrollTop: 0
        },600, 'easeInOutQuad');
    });
    // if ($(".n-banner").length==1 || $(".n-banenr-two").length==1) {
    //     $(".n-banner").addClass("active");
    //     $(".n-banenr-two").addClass("active");
    //     setTimeout(function(){
    //         text({
    //             str: $('#text').data("text"),
    //             effect: "right",
    //             speed :$('#text').data("time"),
    //         });
    //     },500)
        
    // };
    
});
 function visual_button_scroll_down(){
    $('.scroll_down').on('click',function(){
        var target = $(this).attr('href');
        var target_top = $(target).offset().top;
        $('html,body').animate({
            scrollTop : target_top
        },600, 'easeInOutQuad');
        return false;
    });
}
 function visual_button_scroll_down2(){
    if ($(window).width()>1023) {
        $('.scroll_down2').on('click',function(){
            var target = $(this).attr('href');
            var target_top = $(target).offset().top- 135;
            $('html,body').animate({
                scrollTop : target_top
            },600, 'easeInOutQuad');
            return false;
        });
    }else{
        $('.scroll_down2').on('click',function(){
            var target = $(this).attr('href');
            var target_top = $(target).offset().top - 65;
            $('html,body').animate({
                scrollTop : target_top
            },600, 'easeInOutQuad');
            return false;
        });
    }
}

function scrollAni() {
    $('.js-m').each(function() {
        var _this = $(this);
        if (_this.offset().top > $(window).scrollTop() + $(window).height() || _this.offset().top < $(window).scrollTop() - _this.outerHeight()) {
            // _this.removeClass('animate');
        } else if ($(window).scrollTop() > _this.offset().top - $(window).height() * 0.95) {
            _this.addClass('animate');
        }
    });
    $(window).scroll(function() {
        $('.js-m').each(function() {
            var _this = $(this);
            if (_this.offset().top > $(window).scrollTop() + $(window).height() || _this.offset().top < $(window).scrollTop() - _this.outerHeight()) {
                // _this.removeClass('animate');
            } else if ($(window).scrollTop() > _this.offset().top - $(window).height() * 0.95) {
                _this.addClass('animate');
                // $(_this)
                // startScramble('.i-img-list.animate .home-dec');
                // startScramble('.i-lista.animate .home-dec');
            }
        });
        
    });
}
// function startScramble(name) {
//     $(name).each(function (i, item) {
//         var newText = $(item).data('text') || $(item).text();
//         var delay = Number($(item).data('delay')) || 0;
//         setTimeout(function () {
//             $(item).attr('data-text', newText);
//             setScramble(item, [newText]);
//         }, delay);

//     });
// }
// function setScramble(text, phrase) {
//     var count = 0;
//     var scramble = new TextScramble(text);
//     scramble.setText(phrase[count]);
//     var doScramble = function doScramble() {
//         scramble.setText(phrase[count]).then(function () {
//             setTimeout(doScramble, 800);
//         });
//         count = (count + 1) % phrase.length;
//     }
//     //doScramble();
// }


function btnhover(obj){
  var ink, d, x, y;
  var ulbox = obj;
    ulbox.find("a").bind("click touchstart",
    function(e) {
        $(".ink").remove();
        if ($(this).children(".ink").length === 0) {
            $(this).prepend("<span class='ink'></span>")
        }
        ink = $(this).find(".ink");
        ink.removeClass("animate-ink");
        if (!ink.height() && !ink.width()) {
            d = Math.max($(this).outerWidth(), $(this).outerHeight());
            ink.css({
                height: d,
                width: d
            })
        }
        x = e.pageX - $(this).offset().left - ink.width() / 2;
        y = e.pageY - $(this).offset().top - ink.height() / 2;
        ink.css({
            top: y + 'px',
            left: x + 'px'
        }).addClass("animate-ink")
    })
}

function getUrlParam(name){
    var reg = new RegExp("(^|&)"+ name +"=([^&]*)(&|$)"); 
    var r = window.location.search.substr(1).match(reg);  
    if (r!=null) return unescape(r[2]); return null; 
} 




