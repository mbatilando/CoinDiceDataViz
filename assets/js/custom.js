
function coinToss(p, numTrials) {
   var tailsProb = 1 - p;
   var probArray = [p, tailsProb];

   function headsWin() {
      return 0;
   }

   function tailsWin() {
      return 1;
   }

   var headsOrTails = [headsWin, tailsWin];

   function chooseRand() {
      var myArray = [];
      var i,sum = 0;

      for (i = 0; i < probArray.length - 1; i++) {
         sum += (probArray[i]/100.0);
         myArray[i] = sum;
      }

      var rand = Math.random();

      for(i = 0; i < myArray.length && rand >= myArray[i]; i++);
         return(headsOrTails[i])();
   }

   var count = [0, 0];

   for (var i = 0 ; i < numTrials ; i++)   {
    count[chooseRand()]++;
   }
    
  return count;

}

function makeCoinChart() {
    var p = document.getElementById("headsProb").value;
    var numTrials = document.getElementById("numTrials").value;
    var dieResults = coinToss(p, numTrials);
    var heads = dieResults[0];
    var tails = dieResults[1];

    var chart = new CanvasJS.Chart("colChartContainer", {
        theme: "theme2",
        title: {
            text: "Coin Toss Results"
        },
        data: [{
            type: "column",
            dataPoints: [{
                label: "Heads",
                y: heads
            }, {
                label: "Tails",
                y: tails
            }]
        }]
    });

    chart.render();
}

function makeCoinChartBinom() {
    var p = document.getElementById("headsProbBinom").value;
    var numTrials = document.getElementById("numTrialsBinom").value;
    var numCoinTosses = Number(document.getElementById("numCoinTossBinom").value);
    var resArray = [0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0,0];
    
    for (var i = 0; i < numTrials; i++) {
      var result = coinToss(p, numCoinTosses);
      resArray[result[0] - 1]++;
    }

    var chart = new CanvasJS.Chart("colChartContainer", {
        theme: "theme2",
        title: {
            text: "Binomial Distribution Results"
        },
        data: [{
            type: "column",
            dataPoints: [
              { label: "One", y: resArray[0]},
              { label: "Two", y: resArray[1]},
              { label: "Three", y:resArray[2]},
              { label: "Four", y: resArray[3]},
              { label: "Five", y: resArray[4]},
              { label: "Six", y:resArray[5]},
              { label: "Seven", y: resArray[6]},
              { label: "Eight", y: resArray[7]},
              { label: "Nine", y: resArray[8]},
              { label: "Ten", y: resArray[9]}
            ]
        }]
    });

    chart.render();
}



$(document).ready(function() {
  var runButton = document.getElementById("run");
  var runButtonBinom = document.getElementById("runBinom");
  runButton.addEventListener("click", makeCoinChart);
  runButtonBinom.addEventListener("click", makeCoinChartBinom);
});
