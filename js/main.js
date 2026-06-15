// this is your custom Javascript file

$(function () {
  // add any custom Javascript code below this line
  $("#change-text-button").click(function() {
    $("#city-description").text("These two photos show why I like New York. The city can feel busy and crowded, but sometimes it also looks calm and beautiful.");
  });

  $("#nyc-photo").mouseover(function() {
    $("#nyc-photo").attr("src", "images/hudson_yards.png");
  });

  $("#nyc-photo").mouseout(function() {
    $("#nyc-photo").attr("src", "images/bridge.png");
  });

  $("#move-button").click(function() {
    $("#moving-box").animate({
      left: "100px",
      top: "50px"
    });
  });
  // add any custom Javascript code above this line.
});