/**
*
* H INDEX
*
*/
function hIndex(c){
	var max=0;
	for(var i in c){
		max = c[i]> max ? c[i] : max;
	}
	var hist = [];
	for(var i = 0; i < max + 1; i++){
		hist.push(0);
	}
	for(var i in c){
		hist[c[i]]++;
	}
	console.log(hist);
	var sum = 0;
	for(var i = hist.length - 1; i>=0; i--){
		sum +=hist[i];
		if(sum >= i){
			return i;
		}
	}
	return -1;
}

indexes = [ 3, 2, 0, 4 , 10, 10 , 10, 10 ];
console.log(hIndex(indexes));