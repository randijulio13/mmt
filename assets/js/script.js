$(function() {
    AOS.init();

    $("#upcoming").owlCarousel({
        items: 4,
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
        loop: true
    });
    $("#testimoni").owlCarousel({
        items: 4,
        margin: 10,
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
    $("#clients").owlCarousel({
        items: 4,
        margin: 10,
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

    $("#sticky").sticky({ topSpacing: 0, zIndex: 100 });
})