//Function that will print the date and time on the webpage
var date = moment().format('LL');
$("#currentDay").text(date);

var timeSlotArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

//Function that will color the section based on past, present, & future
var timeSlot = document.querySelector(".timeslot");

var currentTimeSlot = moment().format("HH");

currentTimeSlot =


//Function to display time slot in color (present, future, & past)
$(".timeslot").each(function(){
    var currentBlock = $(this).attr("id");
    console.log(currentTimeSlot, currentBlock);
    if (currentTimeSlot > currentBlock) {
        $(this).addClass("past");
    }
    else if (currentTimeSlot < currentBlock) {
        $(this).addClass("future");
    }
    else {
        $(this).addClass("future");
    }
})
