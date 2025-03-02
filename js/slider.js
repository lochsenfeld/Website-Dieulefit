(function () {
    $('#myCarousel').carousel({
        interval: 6000
    });

    // handles the carousel thumbnails
    $('[id^=carousel-selector-]').click(function () {
        var id_selector = $(this).attr("id");
        var index
        for (var i = 0; i < id_selector.length; i++) {
            if (id_selector[i] == '-' && id_selector[i + 1] != 's') {
                index = i+1;
            }
        }
        var id = id_selector.substr(18);
        id = parseInt(id);
        $('#myCarousel').carousel(id);
        $('[id^=carousel-selector-]').removeClass('selected');
        $(this).addClass('selected');
    });

    // when the carousel slides, auto update
    $('#myCarousel').on('slid.bs.carousel', function (e) {
        var id = $('.item.active').data('slide-number');
        id = parseInt(id);
        $('[id^=carousel-selector-]').removeClass('selected');
        $('[id=carousel-selector-' + id + ']').addClass('selected');
    });
})();