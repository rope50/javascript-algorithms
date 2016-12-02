/*n -> number of dollards
c -> list with dollar values

dado un numero de dolares N, y una lista de valores de dolares para m distintas monedas, 
Encontrar e imprimir el numero de diferentes maneras en que puedas hacer cambio para n dolares
si cada moneda esta disponible en una cantidad infinita.

ANALISIS ALGORITMOS RECURSIVOS
	ES SEPARABLE?
	CASO MINIMO.

*/
var dollars = function(n,c){		
	if(c.length <= 1){
		if(n % c[0] ===0) return 1;
		else return 0;
	}
	var i = 0;
	var acum = 0;
	while(n - c[0] * i >= 0){
		acum += dollars(n - c[0] * i, c.slice(1));
		i++;
	}
	return acum;
}

var dollars2 = function(n, c, dict){		
	if(!dict) dict = {};
	var key = n+'-'+c.length;
	if(dict.hasOwnProperty(key)) 
		return dict[key];
	if(c.length <= 1) 
		return dict[key] = n % c[0] === 0 ? 1 : 0;
	var i = 0, acum = 0;
	while(n - c[0] * i >= 0) 
		acum += dollars2(n - c[0] * i++, c.slice(1), dict);
	return dict[key] = acum;
}

var n = 75;
var c = [25,10,11,29,49,31,33,39,12,36,40,22,21,16,37,8,18,4,27,17,26,32,6,38,2,30,34];

console.log(dollars3(n,c));


function makeChange(coins, money){
    DP = [];
	for(var i = 0; i <= money; i++){ //O(N) space.
	    DP.push(0);
	}
    DP[0] = 1; 	// n == 0 case.
    for(var i = 0 ; i < coins.length; i++){
        coin = coins[i];
        for(var j = coin; j < DP.length; j++){
            DP[j] += DP[j - coin]; // The only tricky step.
        }
    }
    return DP[money];
}


//console.log(makeChange(c,n));



