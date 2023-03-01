// Wrap all code that interacts with the DOM in a call to jQuery to ensure that
// the code isn't run until the browser has finished rendering all the elements
// in the html.

var clock = new Date();
console.log(clock);
document.getElementById("clock").textContent = clock;


var datetime = new Date().getHours();
console.log(datetime); // it will represent date in the console of developers tool
//document.getElementById("time").textContent = datetime;

var viii = document.getElementById("8");
var ix = document.getElementById("9");
var x = document.getElementById("10");
var xi = document.getElementById("11");
var xii = document.getElementById("12");
var xiii = document.getElementById("13");
var xiv = document.getElementById("14");
var xv = document.getElementById("15");
var xvi = document.getElementById("16");

var eight = document.getElementById("eight");
var nine = document.getElementById("nine");
var ten = document.getElementById("ten");
var eleven = document.getElementById("eleven");
var twelve = document.getElementById("twelve");
var thirteen = document.getElementById("thirteen");
var fourteen = document.getElementById("fourteen");
var fifteen = document.getElementById("fifteen");
var sixteen = document.getElementById("sixteen");

var saveButtons= document.getElementsByClassName("btn");

console.log(saveButtons);

var elements =[viii,ix,x,xi,xii,xiii,xiv,xv,xvi];

var hour = 8;

for (let index = 0; index < elements.length; index++) {
  
  
  if (hour < datetime) {
    elements[index].setAttribute("class", "row time-block past");
    console.log(hour);
    hour ++;
  }

 else if( hour == datetime){
  elements[index].setAttribute("class", "row time-block present");
  console.log(hour);
  hour ++;
  }
  
  else {
    elements[index].setAttribute("class", "row time-block future");
    console.log(hour);
    hour ++;
  }
  
}

  function saveLastEntry(){
    var entries={
     eight: eight.value.trim(),
     nine: nine.value.trim(),
     ten: ten.value.trim(),
     eleven: eleven.value.trim(),
     twelve: twelve.value.trim(),
     thirteen: thirteen.value.trim(),
     fourteen: fourteen.value.trim(),
     fifteen: fifteen.value.trim(),
     sixteen: sixteen.value.trim(),
    };
    localStorage.setItem("entries", JSON.stringify(entries));
  }

  function renderLastEntry() {
    var lastentries = JSON.parse(localStorage.getItem("entries"));
    if (lastentries !== null) {
      document.getElementById("eight").innerHTML = lastentries.eight;
      document.getElementById("nine").innerHTML = lastentries.nine;
      document.getElementById("ten").innerHTML = lastentries.ten;
      document.getElementById("eleven").innerHTML = lastentries.eleven;
      document.getElementById("twelve").innerHTML = lastentries.twelve;
      document.getElementById("thirteen").innerHTML = lastentries.thirteen;
      document.getElementById("fourteen").innerHTML = lastentries.fourteen;
      document.getElementById("fifteen").innerHTML = lastentries.fifteen;
      document.getElementById("sixteen").innerHTML = lastentries.sixteen;
      } else {
        return;
      }
  }

  for (let h = 0; h < saveButtons.length; h++) {
    saveButtons[h].addEventListener("click", function(event) {
      event.preventDefault();
      saveLastEntry();
      renderLastEntry();
      });
    
  }


////$(function () {
  // TODO: Add a listener for click events on the save button. This code should
  // use the id in the containing time-block as a key to save the user input in
  // local storage. HINT: What does `this` reference in the click listener
  // function? How can DOM traversal be used to get the "hour-x" id of the
  // time-block containing the button that was clicked? How might the id be
  // useful when saving the description in local storage?
  //
  // TODO: Add code to apply the past, present, or future class to each time
  // block by comparing the id to the current hour. HINTS: How can the id
  // attribute of each time-block be used to conditionally add or remove the
  // past, present, and future classes? How can Day.js be used to get the
  // current hour in 24-hour time?
  
  //
  // TODO: Add code to get any user input that was saved in localStorage and set
  // the values of the corresponding textarea elements. HINT: How can the id
  // attribute of each time-block be used to do this?
  //
  // TODO: Add code to display the current date in the header of the page.
//});
