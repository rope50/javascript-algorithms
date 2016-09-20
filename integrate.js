/**
*
* Calculate polinome integral and show polinome
*
**/

function integrate(p){
	var ntg = [1];
	for(var i = 0; i < p.length; i++){
		ntg.push(p[i]/(i+1));
	}
	return ntg;
}

function printPoli(poli){
	var s=[];
	for(i=0; i < poli.length; i++){
		s.push(i ? poli[i]+"X^"+i : poli[i]);
	}
	return s.join(' + ');
}

var poli = [4, 0, 2];

console.log('Polinomio:', printPoli(poli));
console.log('Integrado:', printPoli(integrate(poli)));