$(document).ready(function() {
    // Filter buttons click event
    $('.filter-button').on('click', function() {
        $('.filter-button').removeClass('active');
        $(this).addClass('active');
        var category = $(this).data('category');
        if (category === 'all') {
            $('.image').fadeIn();
        } else {
            $('.image').fadeOut(200);
            $('.image.' + category).fadeIn(400);
        }
    });

    // Lightbox functionality
    $('.image').on('click', function() {
        var imgSrc = $(this).find('img').attr('src');
        $('.lightbox-image').attr('src', imgSrc);
        $('#lightbox').fadeIn();
    });

    $('.close-button').on('click', function() {
        $('#lightbox').fadeOut();
    });
});
