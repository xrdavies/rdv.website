$(function () {

    window.onscroll = function() {
        if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
            $("#topBtn").show()
        } else {
            $("#topBtn").hide()
        }
    };

    $("#topBtn").click(function() {
        $("html, body").animate({
            scrollTop: 0 + "px"
        }, {
            duration: 600,
            easing: "linear"
        });

        return false;
    });
    $(".nav-item a").click(function() {
        $(".navRhtBrdr").hide()
        let tp = $($(this).attr("href")).offset().top

        $("html, body").animate({
            scrollTop: (tp) + "px"
        }, {
            duration: 600,
            easing: "linear"
        });

        return false;
    });
    $('body').scrollspy({ target: '#navbar' });

    $("#navBtn").click(function () {
        $(".navRhtBrdr").show(500)

    })
    $("#close").click(function () {
        $(".navRhtBrdr").hide(500)
    })
    $(".member li").click(function () {
        if($(this).hasClass("hover")){
            $(this).removeClass("hover")
        }else{
            $(".member li").each(function () {
                $(this).removeClass("hover")
            });

            $(this).addClass("hover")
        }
    })

    $("#select").click(function (e) {
        e.stopPropagation()
        $(this).find("ul").show(500)
        $(this).find(".selectbg").addClass("trans90")
    })

    $(document).click(function() {
        $("#select ul").hide(500);
        if($(".selectbg").hasClass("trans90")){
            $(".selectbg").removeClass("trans90")
        }

    });
    $("#select li").click(function (e) {
        e.stopPropagation()
        $("#select ul").hide(500);
        if($(".selectbg").hasClass("trans90")){
            $(".selectbg").removeClass("trans90")
        }
        let valueStr = $(this).data("lan");
        $("#select span").html(valueStr);
    })

});
