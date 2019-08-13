$(document).ready(function() {
  $("#page-open").css("color", "red");
  $("#page-open").css("border", "none");
  $("#page-open").css("height", "50");
  $("#page-open").css({
    "background-color": "yellow",
    "margin-left": "50px",
    "margin-top": "50px",
    "font-size": "3em"
  });
});

$(document).ready(function() {
  $("#page-open").on("mouseenter mouseleave", function(e) {
    if (e.type === "mouseenter") {
      $("#page-open").text("Welcome! Stay here forever!");
    } else {
      $("#page-open").text("Dont go please!");
    }
  });
});
