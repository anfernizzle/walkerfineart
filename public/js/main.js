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


    //Sort-Buttons     
     
    //ALL PROJECTS
    $( ".all-projects-button" ).click(function() {
        $(".photo").css({"display":"block"});
        $(".video").css({"display":"block"});  
        $(".inter").css({"display":"block"});         
        $("li.photo").css({"display":"inline-block"});
        $("li.video").css({"display":"inline-block"});
        $("li.inter").css({"display":"inline-block"});                      
    });            
            
    //VIDEO
    $( ".video-button" ).click(function() {
        $(".photo").css({"display":"none"});
        $(".video").css({"display":"block"});  
        $(".inter").css({"display":"none"});         
        $("li.photo").css({"display":"none"});
        $("li.video").css({"display":"inline-block"});
        $("li.inter").css({"display":"none"});                      
    });      

    //INTERACTIVE
    $( ".inter-button" ).click(function() {
        $(".photo").css({"display":"none"});
        $(".video").css({"display":"none"});  
        $(".inter").css({"display":"block"});         
        $("li.photo").css({"display":"none"});
        $("li.video").css({"display":"none"});
        $("li.inter").css({"display":"inline-block"});                      
    });      

    //PHOTO
    $( ".photo-button" ).click(function() {
        $(".photo").css({"display":"block"});
        $(".video").css({"display":"none"});  
        $(".inter").css({"display":"none"});         
        $("li.photo").css({"display":"inline-block"});
        $("li.video").css({"display":"none"});
        $("li.inter").css({"display":"none"});                      
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