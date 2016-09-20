/**
* Derivadas de polinomios
*
*/

function derivate(poli){
	if(poli.length <= 1){
		return [];
	}
	var d = [];
	for(var i = 1; i< poli.length; i++){
       d.push(i*poli[i]);
	}
	return d;
}

function printPoli(poli){
	var s=[];
	for(i=0; i < poli.length; i++){
		s.push(i ? poli[i]+"X^"+i : poli[i]);
	}
	return s.join(' + ');
}

var poli = [4, 0, 2];
console.log('Polinome :', printPoli(poli));
console.log('Derivate :', printPoli(derivate(poli)));