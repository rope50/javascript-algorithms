/*n -> number of dollards
c -> list with dollar values

dado un numero de dolares N, y una lista de valores de dolares para m distintas monedas, 
Encontrar e imprimir el numero de diferentes maneras en que puedas hacer cambio para n dolares
si cada moneda esta disponible en una cantidad infinita.

*/
var dDict = {};
var dolars = function(n,c){
	var acum = 0
	for(var i in c){
		if(n - c[i] >=0){
			acum = acum + 1 + dolars(n-c[i],c);
		}
		else{
			acum += dolars(n-c[i],c);
		}
	}
	return acum;
}

var n = 4;
var c= [1,2,3]
console.log(dolars(n,c));