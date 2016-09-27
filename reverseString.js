/**
* Returns the str string reversed
* @Param {String} str - string for reverse
* @returns {String}
*/
function reverse(str){
	var back = str.length-1, forward=0;
	var tempChar;
	while(forward < back){
		tempChar = str[forward];
		str = replaceAt(str, forward++, str[back]);
		str = replaceAt(str, back--, tempChar);
	}
	return str;
}

function replaceAt(s, n, t) {
    return s.substring(0, n) + t + s.substring(n + 1);
}

var str ='reverse this string';
console.log(reverse(str));