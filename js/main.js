function map() {
    var mapProp = {
        center: new window.google.maps.LatLng(51.508742, -0.120850),
        zoom: 5,
    };
    var map = new window.google.maps.Map(document.getElementById("googleMap"), mapProp);
}

$(document).ready(function () {
    $('.owl-carousel').owlCarousel({
        loop: true,
        autoplay: true,
        autoplayTimeout: 2000,
        autoplayHoverPause: true,
        dots: false,
        dotsEach: false,
        nav: false,
        autoHeight: false,
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

});