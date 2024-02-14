$(document).ready(function(){
    var phrases = [
        "Are you sure...?",
        "You should really rethink this...",
        "Last chance...",
        "Alright... NO SESAME CHICKEN!",
    ];
    var currentIndex=0;
    $('.NoButton').click(function() {
        $(this).text(phrases[currentIndex]);
        currentIndex = (currentIndex + 1) % phrases.length;
    });
});

$(document).ready(function() {
  
    $('.YesButton').click(function() {
     
      window.location.href = 'http://127.0.0.1:3000/Valentines%20Project/M&S%20Website/MainPage.html';
    });
});
