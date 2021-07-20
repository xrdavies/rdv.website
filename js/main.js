$(function () {
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
    $('body').scrollspy({ target: '#navbar' })

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
})
