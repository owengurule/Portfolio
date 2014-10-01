//load the DOM into jQuery
$(document).ready(function(){
    //functions go inside the document.ready() callback
    $('li').on('click', function () {
        //$(this).css('color', 'purple').css('background-color', 'orange');
        //$(this).fadeOut(2000);


        
    });

    $(document).ready(function () {
        $('li').on('click', function () { });

            $('.tabSelection li').on('click', function() {

                var tabID = $(this).data('tab-id');
                alert(tabID);
                //select the active tab
                var activeTab = $('.active');
                //select tab to activate
                var selectedTab = $('#' + tabID);
                //remove the active class from the active tab and add the hide class to the active tab
                activeTab.removeClass('active');
                activeTab.addClass('hide');

                //remove the hide class from the selectedTab
                //and add the active class to the selectedTab

                selectedTab.removeClass('hide').addClass('active');

            });



    });

    //Carousel Function Start
    $('.carousel-next').on('click', function () {
        //get the active slide
        var activeSlide = $('.carousel.active');
        //get the next slide
        var nextSlide = activeSlide.next();
        //make sure its a carousel slide
        if (!nextSlide.hasClass('carousel'))
        {
            $('.carousel').first();
        }
        //remove the active class add hide class to the active slide
        activeSlide.removeClass('active').addClass('hide');
        //remove the hide class add the active class to the next slide
        nextSlide.removeClass('hide').addClass('active');

        alert(activeSlide);
        alert(nextSlide);
    });
    //Carousel Function End

});

