$(function(){

if (user.u < user.max) {

// put this script where ever you like in the HTML document

// Handle user click
function mouseClicked () {  // user has clicked
   // I hate CSS as it does not provide a handy way to reset animations
   // so set the spans class to starting class
   numbersSpans[nextNumber].className = "hiddenNumber";
   // then use timeout so the pages does a reflow (So it knows the class has changed)
   setTimeout(startAnimation,10);
   $(".hiddenNumber").html("+"+user.click);
}

// start the animation
function startAnimation () {
   var x;  // varable for the random position

   // set the class to the animation class;
   numbersSpans[nextNumber].className = "clickedNumber";

   // get a random offset
  // x = 5 + Math.floor( (Math.random() -0.5) *5);
   // apply the offset
   numbersSpans[nextNumber].style.right = 49 + "%";

   // point to the next number for the next animation
   nextNumber = (nextNumber +1)%len;
   // animation will now start and do its thing all by its self.
}

// vars to hold info on the numbers
var numbersSpans;    // each number element
var nextNumber = 0;  // the next number to animate
var len;             // the number of numbers to animate

// Start up function called on page load.
function startAll(){
    // get all the number spans
    numbersSpans = numberThing.getElementsByTagName("span");
  // save the length as I am lazy and len is easy to type
  len = numbersSpans.length;
  // set an event attached to the cookie to fire if the mouse is clicked
  numberThing.addEventListener("click",mouseClicked,false);
  // Yes used short cut again but if anyone finds it does not work would love to hear about it.
}

// wait for page to load then start it all going.
window.addEventListener("load",startAll,false);

$("#more").click(function(){
  mouseClicked()
})
}
})
