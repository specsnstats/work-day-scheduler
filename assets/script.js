var timeBoxesEl = document.getElementsByTagName("span")
var currentDayEl = document.getElementById("currentDay")
var saveButtonEl = $("button")
var allTextBoxesEl = $("input")
var day = moment().format('dddd');
var hour = moment().hours()

console.log(day);

// text El's
var box9amTextEl = $("#9am-text")
var box10amTextEl = $("#10am-text")
var box11amTextEl = $("#11am-text")
var box12pmTextEl = $("#12pm-text")
var box1pmTextEl = $("#1pm-text")
var box2pmTextEl = $("#2pm-text")
var box3pmTextEl = $("#3pm-text")
var box4pmTextEl = $("#4pm-text")
var box5pmTextEl = $("#6pm-text")

// box El's
var box9amBtnEl = $("#9am-btn")
var box10amBtnEl = $("#10am-btn")
var box11amBtnEl = $("#11am-btn")
var box12pmBtnEl = $("#12pm-btn")
var box1pmBtnEl = $("#1pm-btn")
var box2pmBtnEl = $("#2pm-btn")
var box3pmBtnEl = $("#3pm-btn")
var box4pmBtnEl = $("#4pm-btn")
var box5pmBtnEl = $("#6pm-btn")


console.log(timeBoxesEl);
// WHEN I open the planner
// THEN the current day is displayed at the top of the calendar
// create a static page to display the title, current date, and a simple description below the title
// current day

// create a function that populates the hours of the day

  // click listener for the function to run
saveButtonEl.on("click", function() {
  // store the id of whatever was clicked 
  var storeId = $(this).attr("id");
  // save to local storage with that ID and the contents of the text
  localStorage.setItem(storeId, JSON.stringify($(this).parent().siblings("input").val()))
});

// .replace that didnt work
// .replace(/['"]+/g, '')

  // function that loads the existing data for the box
box9amTextEl.val(localStorage.getItem("9am-btn"));
box10amTextEl.val(localStorage.getItem("10am-btn"));
box11amTextEl.val(localStorage.getItem("11am-btn"));
box12pmTextEl.val(localStorage.getItem("12pm-btn"));
box1pmTextEl.val(localStorage.getItem("1pm-btn"));
box2pmTextEl.val(localStorage.getItem("2pm-btn"));
box3pmTextEl.val(localStorage.getItem("3pm-btn"));
box4pmTextEl.val(localStorage.getItem("4pm-btn"));
box5pmTextEl.val(localStorage.getItem("5pm-btn"));

// create a for loop that changes the color of each time block depending on whether it is before/during/after the current time

for (let i=0; i < allTextBoxesEl.length; i++) {
  var allTextBoxesDataTime = allTextBoxesEl[i].getAttribute("data-time")
  if (hour == allTextBoxesDataTime){
    allTextBoxesEl[i].setAttribute("style", "background-color: #ff6961")
  } else if (hour < allTextBoxesDataTime) {
    allTextBoxesEl[i].setAttribute("style", "background-color: #77dd77")
  } else allTextBoxesEl[i].setAttribute("style", "background-color: #d3d3d3")
}

