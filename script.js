var spawnThread = function () {
	var n = parseInt(document.getElementById("input-number").value);

	var primeWorker = new Worker('./primeScript.js');
	var result = document.getElementById("nth-prime-result");

	primeWorker.postMessage(n);

	primeWorker.onmessage = function(e) {
		result.textContent = e.data;
		console.log('Message received from worker');
	}
}

var isPrime = function (number, primesSoFar) {
	var squareRoot = Math.sqrt(number);

	for (var j = 0; j < primesSoFar.length && primesSoFar[j] <= squareRoot; j++) {

		if (number % primesSoFar[j] == 0) {	
			return false;
		} 
	}

	return true;
}

var calculateNthPrime = function () {
	var n = parseInt(document.getElementById("input-number").value);
	var result = document.getElementById("nth-prime-result");

	var primeArray = [];
	var i;

	for (i = 2; primeArray.length < n; i++) {

		if (isPrime(i, primeArray)) {
			primeArray.push(i);
		}
	}

	var nth = primeArray[primeArray.length - 1];

	result.textContent = "Result: " + nth;
}

var withWorkerButton = document.getElementById("with-web-worker");
withWorkerButton.addEventListener("click", spawnThread);

var mainThreadButton = document.getElementById("in-main-thread");
mainThreadButton.addEventListener("click", calculateNthPrime);



