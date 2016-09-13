$(function() {   

    // show/hide popular img block
    $('.show_hide').click(function(){
        $("#popular").toggleClass("hidden");
    });

    //open modal
    $('#popular').on('click','a.modal', function(e) { 
        e.preventDefault();

        //path to file
        var url = $(this).attr("href");
        //console.log(url);
        
        //show popup
        $("#popup").addClass('show');
        //close popup
        $('#popup').on('click','#close_popup, #mask', function(e) {
            $("#popup").removeClass('show');
        });

        $('#popup_content').load(url);


    });   
});