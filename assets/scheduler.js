$(document).ready(function() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    let na = "Brendan";
    localStorage.setItem("name", JSON.stringify(na));
    let myName = JSON.parse(localStorage.getItem("name"));
    console.log(myName);
    
    $("#save9").on("click" , function() {
        let am9 = $("#9am").val();
        localStorage.setItem("9oClock" , JSON.stringify(am9));
    });
    
    let myWork9 = JSON.parse(localStorage.getItem("9oClock"));
    console.log(myWork9);
    $("#9am").val(myWork9);

    $("#save10").on("click" , function() {
        let am9 = $("#10am").val();
        localStorage.setItem("10oClock" , JSON.stringify(am9));
    });
    
    let myWork10 = JSON.parse(localStorage.getItem("10oClock"));
    console.log(myWork10);
    $("#10am").val(myWork10);

});