function factible(magazine, ransom){
	if(!magazine instanceof Array || !ransom instanceof Array)
		return 'No';
    if(ransom.length > magazine.length)
        return 'No';
	var dict = {magazine: {}, ransom: {}};
	for(var i in magazine){
		if(!dict.magazine[magazine[i]]) 
			dict.magazine[magazine[i]] = 0;
		dict.magazine[magazine[i]]++;
	}
	for(var i in ransom){
		if(!dict.ransom[ransom[i]]) 
			dict.ransom[ransom[i]] = 0;
		dict.ransom[ransom[i]]++;
	}
	
	for(var i in dict.ransom){
        if(!dict.magazine[i])
            return 'No';
		if(dict.ransom[i] > dict.magazine[i])
			return 'No';
	}
	return 'Yes';
}

console.log(factible(['a','b','c'],['b','c','d']));