function choosePrizeDoor() {
	return Math.floor(Math.random()*3);
}

function chooseFirstDoor() {
	return Math.floor(Math.random()*3);
}

function chooseSecondDoor(firstDoor, openedDoor) {
	while (true) {
		var secondDoor = Math.floor(Math.random()*3);
		if (secondDoor != firstDoor && secondDoor != openedDoor) {
			return secondDoor;
		}
	}
}

function openWrongDoor(firstDoor, prizeDoor) {
	while(true) {
		randDoor = Math.floor(Math.random()*3);
		if(randDoor != firstDoor && randDoor != prizeDoor) {
			return randDoor
		}
	}
}

function playMontyHall(strategy) {
	var prizeDoor = choosePrizeDoor();
	//alert('Prize door is: ' + prizeDoor);
	var firstDoor = chooseFirstDoor();
	//alert('First Chosen door is: ' + firstDoor);
	var openedDoor = openWrongDoor(firstDoor, prizeDoor);
	//alert('Opened Wrong door is: ' + openedDoor);
	if (strategy == 'stayStrategy') {
		return playStayStrat(firstDoor, prizeDoor);
	} else {
		return playSwitchStrat(firstDoor, openedDoor, prizeDoor);
	}
}

function playStayStrat(firstDoor, prizeDoor) {
	if(firstDoor == prizeDoor) {
		//alert('Stay Strategy Won');
		return 1;
	} else {
		//alert('Stay Strategy Lost');
		return 0;
	}
}

function playSwitchStrat(firstDoor, openedDoor, prizeDoor) {
	var secondDoor = chooseSecondDoor(firstDoor, openedDoor);
	//alert('Second Door is: ' + secondDoor);
	if(secondDoor == prizeDoor) {
		//alert('Switch Strategy Won');
		return 1;
	} else {
		//alert('Switch Strategy Lost');
		return 0; 
	}
}

function doMontyHallTrials(strategy, numTrials) {
	for(i = 0, wins = 0 ; i < numTrials; i++) {
		if(playMontyHall(strategy) == 1) {
			wins += 1;
		}
	}
	return [wins, numTrials - wins]
}

function makeMontyChart() {
    var numTrials = document.getElementById("numTrials").value;
    var stayResults = doMontyHallTrials('stayStrategy', numTrials);
    var switchResults = doMontyHallTrials('switchStrategy', numTrials);

    var chart = new CanvasJS.Chart("colChartContainer", {
        theme: "theme2",
        title: {
            text: "Monty Hall Results"
        },
        axisX:{
          title:"Type of Strategy",
         },
         axisY:{
          title:"Number of Wins",
         },
        data: [{
            type: "column",
            dataPoints: [
              { label: "Switch Strategy", y: switchResults[0]},
              { label: "Stay Strategy", y: stayResults[0]}
            ]
        }]
    });

    chart.render();
}

$(document).ready(function() {
  var runButton = document.getElementById("runMonty");
  runButton.addEventListener("click", makeMontyChart);
});