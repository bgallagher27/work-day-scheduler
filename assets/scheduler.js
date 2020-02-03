$(document).ready(function() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));
    
    // This is the 9 am timebox
    $("#save9").on("click" , function() {
        let am9 = $("#9am").val();
        localStorage.setItem("9oClock" , JSON.stringify(am9));
    });
    
    let myWork9 = JSON.parse(localStorage.getItem("9oClock"));
    console.log(myWork9);
    $("#9am").val(myWork9);

    // This is the 10 am timebox
    $("#save10").on("click" , function() {
        let am10 = $("#10am").val();
        localStorage.setItem("10oClock" , JSON.stringify(am10));
    });
    
    let myWork10 = JSON.parse(localStorage.getItem("10oClock"));
    console.log(myWork10);
    $("#10am").val(myWork10);

    // This is the 11 am timebox
    $("#save11").on("click" , function() {
        let am11 = $("#11am").val();
        localStorage.setItem("11oClock" , JSON.stringify(am11));
    });

    let myWork11 = JSON.parse(localStorage.getItem("11oClock"));
    console.log(myWork11);
    $("#11am").val(myWork11);

    // This is the 12 pm timebox
    $("#save12").on("click" , function() {
        let pm12 = $("#12pm").val();
        localStorage.setItem("12oClock" , JSON.stringify(pm12));
    });

    let myWork12 = JSON.parse(localStorage.getItem("12oClock"));
    console.log(myWork12);
    $("#12pm").val(myWork12);

    // This is the 1 pm timebox
    $("#save1").on("click" , function() {
        let pm1 = $("#1pm").val();
        localStorage.setItem("1oClock" , JSON.stringify(pm1));
    });

    let myWork1 = JSON.parse(localStorage.getItem("1oClock"));
    console.log(myWork1);
    $("#1pm").val(myWork1);

    // This is the 2 pm timebox
    $("#save2").on("click" , function() {
        let pm2 = $("#2pm").val();
        localStorage.setItem("2oClock" , JSON.stringify(pm2));
    });

    let myWork2 = JSON.parse(localStorage.getItem("2oClock"));
    console.log(myWork2);
    $("#2pm").val(myWork2);

    // This is the 3 pm timebox
    $("#save3").on("click" , function() {
        let pm3 = $("#3pm").val();
        localStorage.setItem("3oClock" , JSON.stringify(pm3));
    });

    let myWork3 = JSON.parse(localStorage.getItem("3oClock"));
    console.log(myWork3);
    $("#3pm").val(myWork3);

    // This is the 4 pm timebox
    $("#save4").on("click" , function() {
        let pm4 = $("#4pm").val();
        localStorage.setItem("4oClock" , JSON.stringify(pm4));
    });

    let myWork4 = JSON.parse(localStorage.getItem("4oClock"));
    console.log(myWork4);
    $("#4pm").val(myWork4);

    // This is the 5 pm timebox
    $("#save5").on("click" , function() {
        let pm5 = $("#5pm").val();
        localStorage.setItem("5oClock" , JSON.stringify(pm5));
    });

    let myWork5 = JSON.parse(localStorage.getItem("5oClock"));
    console.log(myWork5);
    $("#5pm").val(myWork5);

    // 9 am timebox colors
    if (moment().format('LT') > "10:00 AM - 11:59 PM") {
        $("#9am").addClass("past");
    } else if (moment().format('LT') === "9:00 AM - 9:59 AM") {
        $("#9am").addClass("present");
    } else {
        $("#9am").addClass("future");
    };

     // 10 am timebox colors
     if (moment().format('LT') > "11:00 AM - 11:59 PM") {
        $("#10am").addClass("past");
    } else if (moment().format('LT') === "10:00 AM - 10:59 AM") {
        $("#10am").addClass("present");
    } else {
        $("#10am").addClass("future");
    };

     // 11 am timebox colors
     if (moment().format('LT') > "12:00 PM - 11:59 PM") {
        $("#11am").addClass("past");
    } else if (moment().format('LT') === "11:00 AM -11:59 AM") {
        $("#11am").addClass("present");
    } else {
        $("#11am").addClass("future");
    };

     // 12 pm timebox colors
     if (moment().format('LT') > "1:00 PM - 11:59 PM") {
        $("#12pm").addClass("past");
    } else if (moment().format('LT') === "12:00 PM - 12:59 PM") {
        $("#12pm").addClass("present");
    } else {
        $("#12pm").addClass("future");
    };

    // 1 pm timebox colors
    if (moment().format('LT') > "2:00 PM - 11:59 PM") {
        $("#1pm").addClass("past");
    } else if (moment().format('LT') === "1:00 PM - 1:59 PM") {
        $("#1pm").addClass("present");
    } else {
        $("#1pm").addClass("future");
    };

    // 2 pm timebox colors
    if (moment().format('LT') > "3:00 PM - 11:59 PM") {
        $("#2pm").addClass("past");
    } else if (moment().format('LT') === "2:00 PM - 2:59 PM") {
        $("#2pm").addClass("present");
    } else {
        $("#2pm").addClass("future");
    };

    // 3 pm timebox colors
    if (moment().format('LT') > "4:00 PM - 11:59 PM") {
        $("#3pm").addClass("past");
    } else if (moment().format('LT') === "3:00 PM - 3:59 PM") {
        $("#3pm").addClass("present");
    } else {
        $("#3pm").addClass("future");
    };

    // 4 pm timebox colors
    if (moment().format('LT') > "5:00 PM - 11:59 PM") {
        $("#4pm").addClass("past");
    } else if (moment().format('LT') === "4:00 PM - 4:59 PM") {
        $("#4pm").addClass("present");
    } else {
        $("#4pm").addClass("future");
    };

    // 5 pm timebox colors
    if (moment().format('LT') > "6:00 PM - 11:59 PM") {
        $("#5pm").addClass("past");
    } else if (moment().format('LT') === "5:00 PM - 5:59 PM") {
        $("#5pm").addClass("present");
    } else {
        $("#5pm").addClass("future");
    };

});