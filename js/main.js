jQuery(document).ready(function($){
    

    // Opening the Side Drawer 
    $(".account").on("click",function(e){
        e.preventDefault();
        $("#login-drawer").fadeIn(300);
        $(".opacity-filter").fadeIn(300);
    });

    // Closing the Opacity Filter
    $(".opacity-filter").on("click",function(e){
        $(".side-drawer").fadeOut(300);
        $(this).fadeOut(300);
    });


    $("#search").on("click",function(e){
        $(".search-area").toggle(300);
    })
})