/*
a b c 
1.- a bc
2.- a cb
3.- bac
4.- cab
5.- bca
6.- cba 
*/

function orders(list){
	ords = [];
	sufs = [];
	win = 2;
	var s = getInitialSuffix(list);
	var p = getInitialPrefix(list);
	var player = ;
	return;
}

function getInitialSuffix(list){
	var sufix = [];
	sufix.push(list.slice(list.length-2));
	sufix.push([sufix[0][1], sufix[0][0]]);
	return sufix;
}
function getInitialPrefix(list){
	return list.slice(0, list.length-3);
}

orders(['a','b','c']);