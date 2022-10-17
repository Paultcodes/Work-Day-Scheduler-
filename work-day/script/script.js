var timeDisplay = $("#time-display");
var today = moment();
var allId = document.querySelectorAll("div");
var allText = document.querySelectorAll("textarea");
var allButtons = document.getElementsByClassName("save");

//Displays the current time at top of the page
function displayTime() {
  var rightNow = moment().format("MMM DD, YYYY [at] hh:mm:ss a");
  timeDisplay.text(rightNow);
}
//Checking the current hour
var checkHour = moment().hour();

setInterval(displayTime, 1000);

//The time blocks in the HTML have the id of 9-17. We are checking if the current hour is =, < or else. The background color of the time blocks will change depending on said conditions.
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

//Looping through all the save buttons and adding event listener that will check the value of the previous sibling to the button (which is always one of the text areas)
//Also adding the data to local storage with keys that correspond to where the data came from
for (let i = 0; i < allButtons.length; i++) {
  allButtons[i].addEventListener("click", function () {
    text = allButtons[i].previousElementSibling.value;

    var buttonId = allButtons[i].getAttribute("id");

    var userText = text;

    localStorage.setItem(buttonId, userText);
  });
}

var one = document.getElementById("1");
var two = document.getElementById("2");
var three = document.getElementById("3");
var four = document.getElementById("4");
var five = document.getElementById("5");
var six = document.getElementById("6");
var seven = document.getElementById("7");
var eight = document.getElementById("8");
var nine = document.getElementById("last");
//Grabs the corresponding text in localStorage and puts into the correct text area.
one.value = localStorage.getItem("9");
two.value = localStorage.getItem("10");
three.value = localStorage.getItem("11");
four.value = localStorage.getItem("12");
five.value = localStorage.getItem("13");
six.value = localStorage.getItem("14");
seven.value = localStorage.getItem("15");
eight.value = localStorage.getItem("16");
nine.value = localStorage.getItem("17");
