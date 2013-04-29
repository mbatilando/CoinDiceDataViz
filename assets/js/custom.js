
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

// function makeChart() {
//   var p = Number(dieForm.elements["headsProb"].value);
//   var numTrials = Number(dieForm.elements["numTrials"].value);
//   var dieResults = coinToss(p, numTrials);
//   var heads = dieResults[0];
//   var tails = dieResults[1];

//   var barChartData = {
//       labels : ["Heads","Tails"],
//       datasets : [
//         {
//           fillColor : "rgba(220,220,220,0.5)",
//           strokeColor : "rgba(220,220,220,14)",
//           data : [heads,tails]
//         }
//       ]
      
//     }

//     var myLine = new Chart(document.getElementById("canvas").getContext("2d")).Bar(barChartData);
// }
 










  window.onload = function makeChart() {
  var p = Number(dieForm.elements["headsProb"].value);
  var numTrials = Number(dieForm.elements["numTrials"].value);
  var dieResults = coinToss(p, numTrials);
  var dieResults = [150,50]
  var heads = dieResults[0];
  var tails = dieResults[1];

  var chart = new CanvasJS.Chart("colChartContainer", {
      theme: "theme2",
      title:{
          text: "Coin Toss Results"              
     },
      data: [              
      {
            type: "column",
            dataPoints: [
              { label: "Heads", y: heads},
              { label: "Tails", y: tails}
            ]
        }
      ]
    });

    chart.render();
  }