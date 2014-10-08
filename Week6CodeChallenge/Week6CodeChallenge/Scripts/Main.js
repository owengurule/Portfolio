//load the DOM into jQuery
$(document).ready(function () {
    //functions go inside the document.ready() callback
    $('li').on('click', function () {
        //$(this).css('color', 'purple').css('background-color', 'orange');
        //$(this).fadeOut(2000);



    });






    $('#content').on('click', '.ajax-get', function (data) {
        //get the URL to GET from the data-url attribute
        var urlRequest = $(this).data('url');
        $.get(urlRequest, function (data) {
            $('#content').html(data);





        });
    });
});