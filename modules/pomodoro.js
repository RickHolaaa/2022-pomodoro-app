//new Date().format('d-m-Y h:i:s');


function getValue() {
    // Sélectionner l'élément input et récupérer sa valeur
    var input = document.getElementById("in").value;
    // Afficher la valeur
    return input;
}

function Timer(){
    var currentDate = new Date();
    var day = currentDate.getDate();
    var month = currentDate.getMonth()+1;
    var year = currentDate.getFullYear();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();
    var input = getValue();
    if(parseInt(minute)+parseInt(input)>60){
        var resulthour = (parseInt(hour) + parseInt((parseInt(minute)+parseInt(input))/60))%24;
        var resultminute = (parseInt(minute)+parseInt(input))%60;
    }
    var result = parseInt(minute)+parseInt(resultminute);
    var result2 = resulthour+parseInt(hour);
    alert("Today we're the "+day+"/"+month+"/"+year+ " at "+hour+":"+minute+":"+second);
    alert("This timer will end at "+resulthour+":"+resultminute+":"+second);
}

/*
var CurrentDate = new Date().toLocaleDateString();
var CurrentTime = new Date().toLocaleTimeString();
let today = new Date().toISOString().slice(0, 10)
*/
var currentDate = new Date()
var day = currentDate.getDate();
var month = currentDate.getMonth()+1;
var year = currentDate.getFullYear();
var hour = currentDate.getHours();
var minute = currentDate.getMinutes();
var second = currentDate.getSeconds();
//console.log("Today we're the ",CurrentDate," and it is ",CurrentTime);
console.log(day,month,year,hour,minute,second);

/*
while(0==0){
    var currentDate = new Date()
    var day = currentDate.getDate();
    var month = currentDate.getMonth()+1;
    var year = currentDate.getFullYear();
    var hour = currentDate.getHours();
    var minute = currentDate.getMinutes();
    var second = currentDate.getSeconds();
    console.log(day,month,year,hour,minute,second);
}
*/