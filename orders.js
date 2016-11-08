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
	var p = getInitialPrefix(list);
	var c = getInitialSuffix(list);
	plen = p.length;
	for(var i = 0; i < plen; i++){
		var player = p.pop();
		temp = [];
		for(var j = 0; j < c.length; j++){
			for(var k=0 ; k<= c[j].length; k++){
				temp.push(addSuffix(c[j], player, k));
			}	
		}
		c = temp;
	}
	console.log('Ordenes',  c.length);
	return;
}

function getInitialSuffix(list){
	var sufix = [];
	sufix.push(list.slice(list.length-2));
	sufix.push([sufix[0][1], sufix[0][0]]);
	return sufix;
}

function getInitialPrefix(list){
	return list.slice(0, list.length-2);
}

function addSuffix(suf, player, position){
	var word = [];
	word = word.concat(suf.slice(0,position));
	word = word.concat(player);
	word = word.concat(suf.slice(position));
	return word;
}

orders(['a','b','c','d','e','f','g','h']);