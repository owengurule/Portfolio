$(document).ready(function () {
    $('.home-next').on('click', function () {
        //get the active slide
        var activeSlide = $('.home.active');
        //get the next slide
        var nextSlide = activeSlide.next();
        //make sure its a carousel slide
        if (!nextSlide.hasClass('home'))
        {
            $('.home').first();
        }
        //remove the active class add hide class to the active slide
        activeSlide.removeClass('active').addClass('hide');
        //remove the hide class add the active class to the next slide
        nextSlide.removeClass('hide').addClass('active');

    });
    //Carousel Function End
});