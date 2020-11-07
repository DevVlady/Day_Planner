$(document).ready(function(){

//Function that will print the date and time on the webpage
var date = moment().format('LLLL');
$("#currentDay").text(date);

var timeSlotArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

//Function that will color the section based on past, present, & future
// var timeSlot = document.querySelector(".timeslot");

var currentTimeSlot = moment().format("HH");


//Function to display time slot in color (present, future, & past)
$(".input-slot").each(function() {
    var timeBlock = parseInt($(this).prev().attr("data-hour"));
    if (timeBlock == currentTimeSlot) {
        $(this).addClass("present");
    }
    else if (timeBlock < currentTimeSlot) {
        $(this).addClass("past");
    }
    else {
        $(this).addClass("future");
    }
});

//Obtain tasks from local storage
var obtainTasks = JSON.parse(localStorage.getItem("object", timeSlotArray));

//Function that will save my content from the input field into the local storage
$(".saveBtn").on("click", function(){
    var timeBlock = $(this).prev().attr("data-hour");
    var inputField = $(this).prev().val().trim();



});

});

