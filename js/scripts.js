$(document).ready(function () {
  $("#counter").submit(function(event) {
    var numberMax = parseInt($('#numberMax').val());
    var interval = parseInt($('#interval').val());

    if ( ($('#numberMax').val() === "") || ($('#interval').val() === "") ) {
      alert('Hey! No empty input boxes, okay?');
    }
    if ( !numberMax || !interval  ) {
      alert('Hey! Those don\'t look like numbers to me');
    }
    if ( (numberMax < 0) || (interval < 0)) {
      alert('Guess what?  No negative numbers, please.');
    }
    if ( interval > numberMax ) {
      alert('Interval cannot be larger than the number you are counting to.');
    }

    for ( var i = interval; i <= numberMax; i += interval ) {
      $("#results").append('<li>'+i+'</li>');
    }
    event.preventDefault();
  });
});
