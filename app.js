console.log("This works ");

//empty array to hold the colors
var colors = [];

function Color(name, color) {
  this.name = name;
  this.color = color;
  }

var red = new Color("red", "red");
var green = new Color("green", "green");
var blue = new Color("blue", "blue");
var yellow = new Color("yellow", "yellow");

colors.push(red);
colors.push(green);
colors.push(blue);
colors.push(yellow);


$(document).ready(function() {   //ready is an event, when event is complete, run annonymous function "event listener"

//appending blocks to DOM
  $('.redblock').append('<div class ="block" id="red"' + "<p></p>");
  $('.greenblock').append('<div class ="block" id="green"' + "<p></p>");
  $('.blueblock').append('<div class ="block" id="blue"' + "<p></p>");
  $('.yellowblock').append('<div class ="block" id="yellow"' + "<p></p>");

//on Block Click
  $('.colorPicked').append("<p>You picked Red! </p>");


  $('.redblock').on('click', function(event) {
     $('.colorPicked').append("<p>You picked Red! </p>");
      alert("You clicked red!");
    });

  $('.greenblock').on('click', function(event) {
      $('.colorPicked').append("<p>You picked Green! </p>");
      alert("You clicked green!");
    });

  $('.blueblock').on('click', function(event) {
      $('.colorPicked').append("<p>You picked Blue! </p>");
      alert("You clicked blue!");
    });

  $('.yellowblock').on('click', function(event) {
      $('.colorPicked').append("<p>You picked Yellow! </p>");
      alert("You clicked yellow!");


    });


// Here is a handy function to generate a random number given a minimum and maximum.
    function randomNumber(min, max){
    return Math.floor(Math.random() * (1 + max - min) + min);

}
  console.log(randomNumber(1,3));
// Function to generate random color
    // function getRandomColor(this.color) {
    //
    // }
  });
