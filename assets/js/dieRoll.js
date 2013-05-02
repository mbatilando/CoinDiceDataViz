function dieRoll(one, two, three, four, five, six, numTrials) {
   var probArray = [one, two, three, four, five, six];

   function oneRoll() {
      return 0;
   }

   function twoRoll() {
      return 1;
   }

   function threeRoll() {
      return 2;
   }

   function fourRoll() {
      return 3;
   }

   function fiveRoll() {
      return 4;
   }

   function sixRoll() {
      return 5;
   }


   var rolls = [oneRoll, twoRoll, threeRoll, fourRoll, fiveRoll, sixRoll];

   function chooseRand() {
      var myArray = [];
      var i,sum = 0;

      for (i = 0; i < probArray.length - 1; i++) {
         sum += (probArray[i]/100.0);
         myArray[i] = sum;
      }

      var rand = Math.random();

      for(i = 0; i < myArray.length && rand >= myArray[i]; i++);
         return(rolls[i])();
   }

   var count = [0, 0, 0, 0, 0, 0];

   for (var i = 0 ; i < numTrials ; i++)   {
    count[chooseRand()]++;
   }
    
  return count;

}

function makeDieChart() {
  var oneProb = document.getElementById("oneProb").value;
  var twoProb = document.getElementById("twoProb").value;
  var threeProb = document.getElementById("threeProb").value;
  var fourProb = document.getElementById("fourProb").value;
  var fiveProb = document.getElementById("fiveProb").value;
  var sixProb = document.getElementById("sixProb").value;
  var numTrials = document.getElementById("numTrials").value;

  var dieResults = dieRoll(oneProb, twoProb, threeProb, fourProb, fiveProb, sixProb, numTrials);
  
  var oneRes = dieResults[0];
  var twoRes = dieResults[1];
  var threeRes = dieResults[2];
  var fourRes = dieResults[3];
  var fiveRes = dieResults[4];
  var sixRes = dieResults[5];

    var chart = new CanvasJS.Chart("dieChartContainer", {
        theme: "theme2",
        title: {
            text: "Ordinary Dice Roll"
        },
        axisX:{
          title:"Dice Results",
         },
         axisY:{
          title:"Total",
         },
        data: [{
            type: "column",
            dataPoints: [
              { label: "One", y: oneRes},
              { label: "Two", y: twoRes},
              { label: "Three", y:threeRes},
              { label: "Four", y: fourRes},
              { label: "Five", y: fiveRes},
              { label: "Six", y:sixRes}
            ]
        }]
    });

    chart.render();
}



function makeDieGeomChart() {
  var oneProb = document.getElementById("oneProbGeom").value;
  var numTrials = document.getElementById("numTrialsGeom").value;
  var numAttempts = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];

  for(var j = 0; j < numTrials; j++){
    innerloop:
      for(var counter = 1; true; counter++) {
        result = coinToss(oneProb, 1);
        if (result[0] == 1) {
          numAttempts[counter-1]++;
          break innerloop;
        } else {
          counter++;
        }
      }
  }
    
    var chart = new CanvasJS.Chart("dieChartContainer", {
        theme: "theme2",
        title: {
            text: "Geometric Distribution"
        },
        axisX:{
          title:"Number of Attempts before Rolling a 1",
         },
         axisY:{
          title:"Total",
         },
        data: [{
            type: "column",
            dataPoints: [
              { label: "One", y: numAttempts[0]},
              { label: "Two", y: numAttempts[1]},
              { label: "Three", y:numAttempts[2]},
              { label: "Four", y: numAttempts[3]},
              { label: "Five", y: numAttempts[4]},
              { label: "Six", y:numAttempts[5]},
              { label: "Seven", y: numAttempts[6]},
              { label: "Eight", y: numAttempts[7]},
              { label: "Nine", y:numAttempts[8]},
              { label: "Ten", y: numAttempts[9]},
              { label: "Eleven", y: numAttempts[10]},
              { label: "Twelve", y: numAttempts[11]},
              { label: "Thirteen", y: numAttempts[12]},
              { label: "Fourteen", y:numAttempts[13]},
              { label: "Fifteen", y: numAttempts[14]},
              { label: "Sixteen", y: numAttempts[15]},
              { label: "Seventeen", y:numAttempts[16]},
              { label: "Eighteen", y: numAttempts[17]},
              { label: "Nineteen", y: numAttempts[18]},
              { label: "Twenty", y:numAttempts[19]}
            ]
        }]
    });

    chart.render();
}



  $(document).ready(function() {
  var runButton = document.getElementById("run");
  var runGeomButton = document.getElementById("runGeom");
  runButton.addEventListener("click", makeDieChart);
  runGeomButton.addEventListener("click", makeDieGeomChart);
});
