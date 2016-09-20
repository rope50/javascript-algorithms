/**
* Calculo de numeros primos positivos hasta N
*
*/

function primes(n){
	var ts = new Date();
	if(n < 2){
		console.log('No primos');
		return;
	}
	var p;
	var pa = [], s;
	for(var i = 2; i <= n; i++){
		p = true;
		s = Math.floor(Math.sqrt(i));
		for(var j = 2; j <= s; j++){
			if(!(i % j)){
				p = false;
				break;
			}
		}
		if(p){
			pa.push(i);
		}
	}
	var tf = new Date();
	console.log('Time length:', tf - ts);
	console.log('Total primes', pa.length);
}

primes(10000000);