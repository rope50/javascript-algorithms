Node =  function(key){
	this.key = key;
	this.value = 0;
	this.complete = false;
	this.children = {};
}

Trie = function(){
	this.root = new Node('.');
}

Trie.prototype = {
	add: function(word){
		var p = this.root, key;
		for(var i = 0 ; i < word.length; i++){
			key = word[i];
			if(p.children[key.charCodeAt(0)]){
				p = p.children[key.charCodeAt(0)];
			}
			else{
				node = new Node(key);
				p.children[key.charCodeAt(0)] = node;
				p = p.children[key.charCodeAt(0)];
			}
			p.value++;
			if(i === word.length - 1){
				p.complete = true;	
			}
		}
	},
	search: function(word){
		var p = this.root, key;
		for(var i = 0 ; i < word.length; i++){
			key = word[i];
			if(!p.children[key.charCodeAt(0)]){
				console.log(0);
				return 0;
			}
			p = p.children[key.charCodeAt(0)];
		}
		console.log(p.value);
		return p.value;
	},
	operate : function(op, word){
		if(op === 'add'){
			this.add(word);
		}
		else if(op === 'find'){
			this.search(word);
		}
	}
}


var trie = new Trie();
trie.add('ca');
//trie.add('camera');
//trie.add('cameration');

trie.search('c');
console.log(trie);

