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
            text: "Die Roll Results"
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

  $(document).ready(function() {
  var runButton = document.getElementById("run");
  runButton.addEventListener("click", makeDieChart);
});
