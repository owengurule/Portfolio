$(document).ready(function () {
    $('.firstimage-next').on('click', function () {
        //get the active slide
        var activeSlide = $('.home.active');
        //get the next slide
        var nextSlide = activeSlide.next();

        //make sure its a carousel slide
        if (!nextSlide.hasClass('home'))
        {
            nextSlide = $('.home').first();
        }
        //remove the active class add hide class to the active slide
        activeSlide.removeClass('active').addClass('hide');
        //remove the hide class add the active class to the next slide
        nextSlide.removeClass('hide').addClass('active');



        


    });
    $(document).ready(function () {

        $('.lastimage-prev').on('click', function () {

            var activeSlide = $('.home.active');
            var prevSlide = activeSlide.prev();

            if (!prevSlide.hasClass('home'))
            {

                prevSlide = $('.home').last();

            }

            activeSlide.removeClass('active').addClass('hide');

            prevSlide.removeClass('hide').addClass('active');

        });

    });
    //Carousel Function End

    //AJAX POST FOR CONTACT FORM
    $('#contactForm').on('submit', function (event) {
        event.preventDefault();
        if ($(this).valid())
            $.post($(this).attr('action'), $(this).serialize(), function (data) {
                $('#container').html(data);
            });
            
    });

    


});