currenttime = document.getElementById("currentDay");
timeSchedule = document.getElementsByClassName("time");
var timecomparison;
var inputContent = [,,,,,,,,,]
timecurrent = function() {
    currenttime.textContent = moment().format("ddd, hA");
    timecomparison = moment().format("H");
    console.log(timecomparison);

    var containerChildren = document.getElementById("container").children;
    for (var i=0;i<containerChildren.length;i++) {
        timeChild = containerChildren[i]
        var integerTime = Number(timeChild.getAttribute("time"))
        input = timeChild.getElementsByTagName("input");
        console.log(timeChild);
        console.log(Number(timeChild.getAttribute("time")));
        if (integerTime == timecomparison) {
            input[0].classList.add("present");
         }
         if (integerTime < timecomparison) {
            input[0].classList.add("past");
         } 
         if (integerTime > timecomparison) {
            input[0].classList.add("future");
         } 
    }
}

saveButtonClicked = function(event) {
    
}




window.onload = timecurrent();
