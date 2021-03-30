$(document).ready(function(){
    $(".signup-tab").click(function(){
        $(".login").fadeOut("slow");
        $(".signup").fadeIn("slow");

    }) ;
    $(".login-tab").click(function(){
        $(".signup").fadeOut("slow");
        $(".login").fadeIn("slow");
    })      
})