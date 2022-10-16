var timeDisplay = $("#time-display");
var today = moment();
var allId = document.querySelectorAll("div");

function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplay.text(rightNow);
}

var checkHour = moment().hour();
console.log(checkHour);

setInterval(displayTime, 1000);

function changeColor() {
  for (let i = 0; i < allId.length; i++) {
    const element = allId[i];
    var idNums = parseInt(element.getAttribute("id"));
    if (idNums === checkHour) {
      element.classList.add("present");
    } else if (idNums > checkHour) {
      element.classList.add("future");
    } else {
      element.classList.add("past");
    }
  }
}

changeColor();
