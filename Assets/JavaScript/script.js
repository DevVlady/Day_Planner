$(document).ready(function(){

    //Function that will print the date and time on the webpage
    var date = moment().format('LLLL');
    $("#currentDay").text(date);

    var timeSlotArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

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


    //Function that will save my content from the input field into the local storage
    $(".saveBtn").on("click", function(){
        //Variable to reflect the hour class set in the html
        var hours = $(this).attr("id");
        //Variable to store the text entered by the user
        var inputVal = $(this).siblings(".user-event-input").val();
        //Added the hours and input val as the keys and object to set item in local storage
        localStorage.setItem(hours, inputVal);
    });


    //Function to pull data that was stored when the user saved their task in the input field
    function dailyTask () {
        for (var i = 0; i < timeSlotArray.length; i++) {
            $(`#hour${timeSlotArray[i]} .input-slot`).val(localStorage.getItem(timeSlotArray[i]));
        }
    }
    //Calling the daily task function
    dailyTask();

});

