var chordsSet = new Array();
var dispChord = ["Q", ""];
var times = new Array();
var timesT = new Array();
var bpm = 60;
var period = 15;
var tickOn = true;
var midTick = false;
var chordsSet = ["D", "C", "G", "A", "E", "Emi", "Ami", "Dmi"];
var chordsChosen = ["D", "C", "G", "A", "E", "Emi", "Ami", "Dmi"];

function setChords(cb1, cb2) {
  chordsChosen = ["D", "C", "G", "A", "E", "Emi", "Ami", "Dmi"];
  displaySet(chordsSet);
  midTick = $("#inMidTick").prop('checked');
  bpm = $("#inpSpeed").val();
  period = $("#inpPeriod").val();
  var speed = (1000/bpm)*60;
  console.log(chordsChosen);
  for (var i = 0; i < period*(1000/speed); i++) {
    times[i] = setTimeout(cb1, i*speed);
    if(midTick) {
      timesT[i] = setTimeout(cb2, ((i*speed)+speed/2)+1);
    }
    tickOn = !tickOn;
    console.log("t",i*speed);
    console.log("T",((i*speed)+speed/2)+1);
  }
}

function shuffleChords() {
//  for (var i = 0; i < 10; i++) {
    var randChord = Math.floor((Math.random() * chordsChosen.length));
    dispChord[0] = chordsSet[randChord];
    console.log(dispChord[1],dispChord[0]);
    $("#actual").html("<h1>"+dispChord[1]+"</h1>");
    $("#actual").css({"background" : "lightgreen"});
    $("#next").html("<h3>"+dispChord[0]+"</h3>");
    dispChord[1] = dispChord[0];
//  }
}

function tick() {
  if (tickOn) {
    $("#actual").css({"background" : "green"});
    console.log("tack");
  }
}

function run() {
  setChords(function() {
    shuffleChords()
  }, function(){
  tick()
}
  );
  console.log("End");
  };

function stop() {
  for (var t in times) {
    clearTimeout(times[t]);
    clearTimeout(timesT[t]);
  }
}

function displaySet(chords) {
    //chHtml = $("#chords").html();
    chHtml = "";
  for (var c in chords) {
    chHtml = chHtml + ("<input type='checkbox' class='inChords'>" + chords[c]);

    console.log(chHtml);
   }
   $("#chords").html(chHtml);

}

$(document).ready(function() {
   // Stuff to do as soon as the DOM is ready
displaySet(chordsSet);
});


/*
function addOne(thenRunThisFunction) {
    console.log("addOne");
    thenRunThisFunction();
}

addOne(function thisGetsRunAfterAddOneFinishes() {
  console.log("thisGetsRunAfterAddOneFinishes");
});
*/
