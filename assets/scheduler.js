$(document).ready(function() {

    $("#currentDay").text(moment().format("dddd, MMMM Do YYYY"));

    //function to call the info from local storage
    //storedEvents9();

    //let am9 = $("#9am").val();
    
    $("#save9").on("click" , function() {
        let am9 = $("#9am").val();
        localStorage.setItem("9oClock" , JSON.stringify(am9));
        let myWork = JSON.parse(localStorage.getItem("9oClock"));
        console.log(myWork);
    });

    let na = "Brendan";

    localStorage.setItem("name", JSON.stringify(na));


    let myName = JSON.parse(localStorage.getItem("name"));

    console.log(myName);

    //function storedEvents9() {
        //let post9 = localStorage.getItem("9oclock");
        //$("#9am").text(post9);
    }
);