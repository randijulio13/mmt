lightbox.option({
    resizeDuration: 200,
    wrapAround: true,
    positionFromTop: 100,
    disableScrolling: true,
})

$(function() {
    AOS.init();

    $("#upcoming").owlCarousel({
        items: 1,
        margin: 15,
        responsive: {
            480: {
                items: 2
            },
            678: {
                items: 3
            },
            960: {
                items: 4
            }
        },
        animateIn: true,
        animateOut: true,
        dots: false,
        loop: true
    });
    $("#testimoni").owlCarousel({
        margin: 10,
        items: 1,
        loop: true,
        dots: false,
        responsive: {
            480: {
                items: 2
            },
            678: {
                items: 3
            },
            960: {
                items: 4
            }
        }
    });
    $("#clients").owlCarousel({
        margin: 10,
        items: 1,
        responsive: {
            480: {
                items: 1
            },
            678: {
                items: 2
            },
            960: {
                items: 3
            }
        }
    });

    $('.btn-daftar').on('click', function(e) {
        e.preventDefault();
        $('#modalDaftar').modal('show');
    })
})