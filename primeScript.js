var Prime = {
  isPrime: function (number, primesSoFar) {
    var squareRoot = Math.sqrt(number);

      for (var j = 0; j < primesSoFar.length && primesSoFar[j] <= squareRoot; j++) {

  			if (number % primesSoFar[j] == 0) {	
    				return false;
  			} 
		}

    return true;
  },

  nthPrime: function (n) {
    var primeArray = [];
    var i;

    for (i = 2; primeArray.length < n; i++) {

      if (this.isPrime(i, primeArray)) {
        primeArray.push(i);
      }
    }
                                            
    var nth = primeArray[primeArray.length - 1];

    return nth;
  }
}

onmessage = function(e) {
  console.log('Message received from main script');
  var workerResult = 'Result: ' + Prime.nthPrime(e.data);
  console.log('Posting message back to main script');
  postMessage(workerResult);
}