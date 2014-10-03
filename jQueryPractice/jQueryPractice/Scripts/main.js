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
            nextSlide = $('.carousel').first();
        }
        //remove the active class add hide class to the active slide
        activeSlide.removeClass('active').addClass('hide');
        //remove the hide class add the active class to the next slide
        nextSlide.removeClass('hide').addClass('active');

        alert(activeSlide);
        alert(nextSlide);
    });
    //Carousel Function End



    ////AJAX GET
    //$('#conent .ajax-get').on('click', function () {
    //    //ajax get, we specify jQuery($).get()
    //    $.get('/ajaxget/cats', function (data) {
    //        $('#content'.html(data));
    //    });
    //});




    // MUCH BETTER AJAX GET CODE!!!
    //use the second selector to apply this function to any matching elements that appear on the page AT ANY TIME
    $('#content').on('click', '.ajax-get', function (data) {
        //get the URL to GET from the data-url attribute
        var urlRequest = $(this).data('url');
        $.get(urlRequest, function (data) {
            $('#content').html(data);
        });
    });

    // AJAX POST FOR CONTACT FORM
    $('#contactForm').on('submit', function (event) {

        //prevents the default behavior of the form, (doesn't allow it to be submitted)
        event.preventDefault();

        //see if the form is valid
        if ($(this).valid()) {
            //AJAX POST
            //1
            var urlToPostTo = $(this).attr('action');
            //serializing convrts the form fields
            //into a string that we can pass into our $.post() function
            var dataToSend = $(this).serialize();
            //alert(dataToSend);
            $.post(urlToPostTo, dataToSend, function (data) {
                //update the #container elements with the new HTML returned in the "data" param
                $('#container').html(data);
            });
        }
    });
    

    $('#content').on('click', '.ajax-get', function (data) {
        //get the URL to GET from the data-url attribute
        var urlRequest = $(this).data('url');
        $.get(urlRequest, function (data) {
            $('#content').html(data);
        });
    });



});

