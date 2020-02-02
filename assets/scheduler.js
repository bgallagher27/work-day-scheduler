$(document).ready(function() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    //function to call the info from local storage
    storedEvents9();

    let am9 = $("#9am").val();
    
    $("#save9").on("click" , function() {
        localStorage.setItem("9oClock" , am9);
    });

    function storedEvents9() {
        let post9 = localStorage.getItem("9oclock");
        $("#9am").text(post9);
    }
});