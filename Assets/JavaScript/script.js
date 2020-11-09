$(document).ready(function(){

    dailyTask();

    //Function that will print the date and time on the webpage
    var date = moment().format('LLLL');
    $("#currentDay").text(date);

    var timeSlotArray = ["9", "10", "11", "12", "13", "14", "15", "16", "17"];

    //Function that will color the section based on past, present, & future
    var timeSlot = document.querySelector(".timeslot");

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

    var tasks = JSON.parse(localStorage.getItem("taskObject")) || [];



    //Function that will save my content from the input field into the local storage
    $(".saveBtn").on("click", function(){
        //Variable to reflect the hour class set in the html
        var hours = $(this).attr("id");
        //Variable to store the text entered by the user
        var inputVal = $(this).prev().val().trim();
        
        var newTask = {
            "clock": hours,
            "input": inputVal
        }
        tasks.push(newTask);
        localStorage.setItem("taskObject", JSON.stringify(tasks));
    });


    //Function to pull data that was stored when the user saved their task in the input field
    function dailyTask () {
        for (var i = 0; i < currentTimeSlot; i++) {
            $(".input-slot").val(JSON.parse(localStorage.getItem(timeSlotArray)));
        }
    }



});

