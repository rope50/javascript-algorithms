/**
* Derivadas e integrales de polinomios
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

function integrate(p){
	var ntg = [1];
	for(var i = 0; i < p.length; i++){
		ntg.push(p[i]/(i+1));
	}
	return ntg;
}

function printPoli(poli){
	var s=[];
	for(i=0; i < poli.length; i++){
		s.push(i ? poli[i]+"X^"+i : poli[i]);
	}
	return s.join(' + ');
}
var poli = [4, 0, 2];
/*
console.log('Polinomio:', printPoli(poli));
console.log('Derivada :', printPoli(derivate(poli)));
console.log('Integrado:', printPoli(integrate(poli)));

*/
/**
* Calculo de numeros primos positivos hasta N
*
*/

function primo(n){
	var ts = new Date();
	if(n < 2){
		console.log('No primos');
		return;
	}
	var p;
	var pa = [], s;
	for(var i = 2; i <= n; i++){
		p = true;
		s = Math.floor(Math.sqrt(i));
		for(var j = 2; j <= s; j++){
			if(!(i % j)){
				p = false;
				break;
			}
		}
		if(p){
			pa.push(i);
		}
	}
	var tf = new Date();
	console.log('Time length:', tf - ts);
	console.log('Total primos', pa.length);
}

//primo(10000000);
/**
* Manejo arboles binarios
*
*/
function Tree(){
	this.root = null;
}

Tree.prototype = {
	constructor: Tree,
	createNode:function(value){
		return {
			value : value,
			left  : null,
			right : null
		}
	},
	addNode : function(value){
		var node = this.createNode(value);
		if(!this.root){
			this.root = node;
		}
		else{
			this.insertNode(node);
		}
	},
	insertNode: function(newNode){
		var value = newNode.value;
		var ins = function(n){
			if(value > n.value){
				if(n.right){
					ins(n.right);
				}else{
					n.right = newNode;
				}
			}
			else{
				if(n.left){
					ins(n.left);
				}else{
					n.left = newNode;
				}	
			}
		}
		ins(this.root);
	},
	fill : function(arr){
		for(var i in arr){
			this.addNode(arr[i]);
		}
	},
	preOrder : function(){
		var pre = function(n){			
			if(n.left)	pre(n.left);
			console.log('Pre:', n.value);
			if(n.right)	pre(n.right);	
		}
		pre(this.root);

	},
	postOrder : function(){
		var post = function(n){			
			if(n.right)	post(n.right);	
			console.log('Post:', n.value);
			if(n.left)	post(n.left);
		}
		post(this.root);
	},
	leafs : function(){
		var leafs = function(n){
			if(!n.left && !n.right)
				console.log('leaf:',n.value);
			else{
				if(n.left)
					leafs(n.left);
				if(n.right)
					leafs(n.right);	
			}
		}
		leafs(this.root);
	},
	deleteNode : function(node){

	},
	searchNode: function(value){
		
	},
}

arr  = [100,50,25,75,12,18,15,200,150,300,175,180,160];

tree = new Tree();
tree.fill(arr);
//tree.leafs();
//tree.preOrder();
//tree.postOrder();
console.log(tree);

/**
*
* Problema de la celebridad
*
*/
group = [
	[1,0,1,0],
	[0,1,1,0],
	[0,0,1,0],
	[0,0,1,1]
];

function celebrity(group){
	var celeb = 0;
	for(var i in group){
		celeb = knows(group, i, celeb) ? celeb : i;
		if(celeb === i){
			console.log('new celebrity', i)
		}
	}
	return celeb;
}
//person 1 knows person 2
function knows(group, p1, p2){
	return group[p1][p2];
}

//console.log(celebrity(group));


/**
*
* H INDEX
*
*/
indexes = [ 3, 2, 0]//, 4 , 10, 10 , 10, 10 ];
/*
	N titulos	
	H siempre es menor o igual al numero de titulos
	h
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

function fact(n){
	if(n === 0) 
		return 1;
	return n*fact(n-1);
}

//console.log(hIndex(indexes));