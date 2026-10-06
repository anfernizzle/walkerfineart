$(document).ready(function(){

    // Clones contents of main menu to mobile menu
    $( "ul#main-menu" ).clone().appendTo( "aside ul.sort-categories" );

    // Scrolling smoothness.
    $(".arctic_scroll").arctic_scroll({ speed: 300 });
 
    // hide #back-top first
    $("#back-top").hide();

    // fade in #back-top
    $(function () {
        $(window).scroll(function () {
            if ($(this).scrollTop() > 100) {
                $('#back-top').fadeIn();
            } else {
                $('#back-top').fadeOut();
            }
        });

    // scroll body to 0px on click
    $('#back-top a').click(function () {
        $('body,html').animate({scrollTop: 0}, 800);
        return false;
        });
    });

    //Hide Dropdown Project Menus On Load
    $(function () {
        $("ul.sort-categories").css({"display":"none"});  
    }); 

    //Toggle Projects Menu
    $("li.first-li").click(function(e) {
        $(e.target).siblings("ul.sort-categories").toggle();
    });        

    //iOS Style Switch
    $(function() {
    $('div.switch-parent input').change(function(){
        if(this.checked){
            $(this).siblings('div.switch').addClass('switchOn');
            }
        else {
            $(this).siblings('div.switch').removeClass('switchOn');
            }
        })
    });  

});
