function Places(place, location, landmark, time, notes) {
  this.placeName = place;
  this.locationName = location;
  this.landmarkName = landmark;
  this.timeOfYear = time;
  this.note = notes;
}






$(document).ready(function(){
  $("form#new-place").submit(function(event){
    event.preventDefault();
    var inputtedPlace = $("input#new-place").val();
    var inputtedLocation = $("input#new-location").val();
    var inputtedLandmark = $("input#new-landmark").val();
    var inputtedTime = $("input#new-time").val();
    var inputtedNotes = $("input#new-note").val();

    var newPlaces = new Places(inputtedPlace, inputtedLocation, inputtedLandmark, inputtedTime, inputtedNotes);

    $("ul#places").append("<li><span class='places'>" +  newPlaces.placeName + "</span></li>");

    $("input#new-place").val("");
    $("input#new-location").val("");
    $("input#new-landmark").val("");
    $("input#new-time").val("");
    $("input#new-note").val("");
    $(".places").last().click(function() {
      $("#show-places").show();
      $(".place-name").text(newPlaces.placeName);
      $(".location-name").text(newPlaces.locationName);
      $(".landmark-name").text(newPlaces.landmarkName);
      $(".time-name").text(newPlaces.timeOfYear);
      $(".note-name").text(newPlaces.note);
    });
  });
});
