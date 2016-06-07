$(document).ready(function () {
  $("#counter").submit(function(event) {
    var numberMax = parseInt($('#numberMax').val());
    var interval = parseInt($('#interval').val());
    for ( var i = interval; i <= numberMax; i += interval ) {
      $("#results").append('<li>'+i+'</li>');
    }
    event.preventDefault();
  });
});
