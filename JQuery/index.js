$("h1").addClass("big-title margin-50")

$("button").css("color","red")

$("a").attr("href", "https://www.yahoo.com");

$("h1").click(function(){
    $("h1").css("color", "red");
});

// JavaScript example of for loop changing h1 color when button clicked
// for (var i = 0; i<5; i++){
// document.querySelectorAll("button")[i].addEventListener("click", function() {
    // document.querySelectorAll("h1").style.color = "purple";
    // });
    // }

$("button").click(function(){
    $("h1").css("color", "purple");
});

$(document).keydown(function(event){
    $("h1").text(event,key);
});

$("h1").on("mouseover", function() {
    $("h1").css("color", "red");
});

