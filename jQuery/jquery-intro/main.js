// JS- document.getElementbyId("demo").innerHTML = "Hello world!";
// JQ - $("#demo").html("Hello world!");

// $("selector").method()

$(document).ready(function() {
  // ready() like onload()
  $("#demo").html("Whatever");
});

// Here is a list of the most commonly used selectors

// $("*") - All selector / wildcard : selects every element on the page
// $("p")- Tag :selects every instances of the  <p> tag on the page
// $(".example") - Class : selects every element that has the example class applied to it
// $("#example") -ID : selects a single instance of the unique example ID
// $("[type='text']") - Attribute : selects any element with the text applied to the type attribute
// $("p:first-of-type") - Pseudo-element : selects the first <p>

// events

$("documents").ready(function() {
  $("#trigger").click(function() {
    $("#demo").html("Hello !");
  });
});

// the most commonly used event methods
// click() - click : executes on a single mouse click
// hover() - Hover : executes when the mouse is hovered over
//an element.mouseenter() and mouseleave() apply only to the mouse entering or leaving an element , respectively
// submit()  when a form is submitted
// scroll() when the screen is scrolled
//keydown() -   we all know this ..so said Benjamin .. I'm not sure :D

$(document).ready(function() {
  $("#greeting").on("mouseenter mouseleave", function(e) {
    if (e.type === "mouseenter") {
      $("#greeting").css("color", "red");
    } else {
      $("#greeting").css("color", "green");
    }
  });
});
