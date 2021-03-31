$(document).ready(function(){
    $(".signup-tab").click(function(){
        $(".login").slideUp();
        $(".signup").slideDown();

    }) ;
    $(".login-tab").click(function(){
        $(".signup").slideUp();
        $(".login").slideDown();

    })      
})