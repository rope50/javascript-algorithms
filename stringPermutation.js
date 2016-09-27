/**
* Returns true if one string is the permutation of other otherwise returns false
* @Param {String} str1 
* @Param {String} str2 
* @returns {Boolean}
*/
function isPermutation(str1, str2){
	if(typeof str1 !== 'string' || typeof str2 !== 'string')
		return false;
	var dict = {str1: {}, str2: {}};
	for(var i in str1){
		if(!dict.str1[str1[i]]) 
			dict.str1[str1[i]] = 0;
		dict.str1[str1[i]]++;
	}
	for(var i in str2){
		if(!dict.str2[str2[i]]) 
			dict.str2[str2[i]] = 0;
		dict.str2[str2[i]]++;
	}
	
	if(Object.keys(dict.str1).length !== Object.keys(dict.str2).length)
		return false;
	for(var i in dict.str1){
		if(dict.str1[i] !== dict.str2[i])
			return false;
	}
	return true;
}

var test = function(describe, itWillBe, be){
	if(itWillBe === be)
		return console.log(describe, ' ... [OK]');
	else
		return console.log(describe, ' ... [NOT OK]');
}

//TEST CASES
console.log('Making [String Permutation] Test cases:');
test('True for empty strings', 		true, 	isPermutation("",""));
test('False for one not string ', 	false, 	isPermutation("",3));
test('No permutation String', 		false, 	isPermutation('somestring', 'nopermutation'));
test('Permutation String', 			true, 	isPermutation('bacedifogu', 'ugofidecab'));
