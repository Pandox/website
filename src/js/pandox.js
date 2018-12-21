var INDEX = (function () {

    /**
     * Credits to https://css-tricks.com/snippets/jquery/smooth-scrolling/
     */
    function bindAnchors(){
        $('a[href*="#"]:not([href="#"])').click(function() {
            if (location.pathname.replace(/^\//,'') == this.pathname.replace(/^\//,'') && location.hostname == this.hostname) {
                var target = $(this.hash);
                target = target.length ? target : $('[name=' + this.hash.slice(1) +']');
                if (target.length) {
                    $('html, body').animate({
                        scrollTop: target.offset().top
                    }, 1000);
                    return false;
                }
            }
        });
    }

    function sizeTheVideo(){
        // - 1.78 is the aspect ratio of the video
        // - This will work if your video is 1920 x 1080
        // - To find this value divide the video's native width by the height eg 1920/1080 = 1.78
        var aspectRatio = 1.78;

        var video = $('#video-container iframe');
        var videoHeight = video.outerHeight();
        var newWidth = videoHeight*aspectRatio;
        var halfNewWidth = newWidth/2;

        //Define the new width and centrally align the iframe
        video.css({"width":newWidth+"px","left":"50%","margin-left":"-"+halfNewWidth+"px"});
    }

    function init() {
        console.log("PANDOX[INIT]")
        sizeTheVideo();
    }

    return {
        init: init
    };
}());