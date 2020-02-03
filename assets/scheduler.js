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

});