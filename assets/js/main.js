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
        $(".navRhtBrdr").hide();
        let tp = $($(this).attr("href")).offset().top;

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
        e.stopPropagation();
        $(this).find("ul").show(500);
        $(this).find(".selectbg").addClass("trans90")
    })

    $(document).click(function() {
        $("#select ul").hide(500);
        if($(".selectbg").hasClass("trans90")){
            $(".selectbg").removeClass("trans90")
        }

    });
    $("#select li").click(function (e) {
        e.stopPropagation();
        $("#select ul").hide(500);
        if($(".selectbg").hasClass("trans90")){
            $(".selectbg").removeClass("trans90")
        }
        let valueStr = $(this).data("lan");
        $("#select span").html(valueStr);

        // let href= window.location.protocol+"//"+window.location.host;
        let href= window.location.href;
        if(valueStr === '中文'){
            window.location.href = href +"/cn"
        }else{
            window.location.href = href
        }
    });
    switchAddress();

    let scale = ($('#sourceDiv')[0].scrollWidth, $('#sourceDiv')[0].clientWidth) /
        ($('#targetDiv')[0].scrollWidth - $('#targetDiv')[0].clientWidth)
    let flag = true
    $('#sourceDiv').mouseover(function() {
        flag = false
        $('#sourceDiv').scroll(function() {
            if (!flag) {
                $('#targetDiv').scrollLeft($(this).scrollLeft() / scale);
            }
        })
    });
    $('#targetDiv').mouseover(function() {
        flag = true;
        $('#targetDiv').scroll(function() {
            if (flag) {
                $('#sourceDiv').scrollLeft($(this).scrollLeft() * scale);
            }
        })
    });

});
function switchAddress(){
    if(window.location.href.indexOf('/cn')>-1){
        $("#select span").html('中文')
    }else{
        $("#select span").html('English')
    }
}
