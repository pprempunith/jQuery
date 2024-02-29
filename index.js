$(document).keydown( function(event){
    $("h1").text(event.key);
})

$("button").on("click", function(){
    $("h1").toggle();
})

$("h1").off("mouseover", function(){
    $("h1").css("color", "purple");
})  

$
